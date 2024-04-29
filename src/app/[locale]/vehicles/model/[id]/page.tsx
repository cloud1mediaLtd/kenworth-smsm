//  src/app/en/vehicles/model[id]/page.tsx
import { StoryblokComponent, getStoryblokApi } from "@storyblok/react";
import { Button } from "components/ui/button";
import { Card } from "components/ui/card";
import { Separator } from "components/ui/separator";
import { useLocale, useTranslations } from "next-intl";
import {
    getTranslations
} from 'next-intl/server';
import Image from "next/image";
import { Suspense } from "react";

async function getData(id: string) {
    try {
        const res = await fetch(`https://smedbackend.fly.dev/vehicles/models/${id}`, { next: { revalidate: 3600 } })
        if (!res.ok) {
            throw new Error('Failed to fetch data');
        }
        return res.json();
    }
    catch (error) {
        console.error('error', error);
        return { data: null };
    }
}

const fetchStoryblokData = async (slug) => {
    const storyblokApi = getStoryblokApi();
    try {
        const res = await storyblokApi.get(`cdn/stories/vehicles/${slug}`);
        if (!res.data) throw new Error('Failed to fetch Storyblok data');
        return res.data.story;
    }
    catch (error) {
        console.error('error', error);
        return { data: null };
    }
};

export default async function getModel
    ({ params: { id } }) {
    const model = await getData(id);
    const { content } = await fetchStoryblokData(id);

    console.log('content:', content);

    const locale = useLocale();
    const isRTL = locale === 'ar';
    const t = await getTranslations('VehiclesPage');

    // fix suspense
    return (

        <section className='relative'>
            <Suspense fallback={<>loading...</>}>
                <div className='flex flex-col md:flex-row gap-6 pt-12'>
                    <div className="flex basis-auto md:basis-1/2 relative min-h-[200px]">
                        <Image
                            src={`/${model.Image}`}
                            alt={`/${model.Name}`}
                            fill={true}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            style={{ objectFit: "contain" }}
                        />
                    </div>

                    <div className='flex flex-col gap-6 basis-auto md:basis-1/2'>

                        <div className='grid grid-cols-2 gap-2 items-center justify-center'>
                            <span className="justify-self-center align-self-center relative min-h-[150px] w-full">
                                <Image
                                    className='p-2'
                                    src={`/${model.Brand.Image}`}
                                    alt={model.Brand.Name}
                                    fill={true}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    style={{ objectFit: "contain" }}
                                />
                            </span>

                            <span className='text-xl font-bolds text-center'>{isRTL && model.NameAr ? model.NameAr : model.Name}</span>
                        </div>
                        <Separator className="my-0" />
                        <p className='text-base text-center tracking-normal md:text-start'>
                            {isRTL && model.Description_ar ? model.Description_ar : model.Description}
                        </p>

                        <div className='flex flex-col gap-3'>

                            <Button className="w-full py-6">
                                {isRTL ? 'الاستفسار' : 'Enquire'}
                            </Button>
                            <Button className="w-full py-6">
                                Download Pdf
                            </Button>

                        </div>

                    </div>
                </div>
                <Separator className="my-6" />

                <div className="flex flex-col gap-6">

                    {model.Trims?.map((trim) => (
                        <Card key={trim.ID} className='flex flex-col gap-2 p-6'>
                            <div className="flex gap-3 items-center">
                                <span className='text-xlarge-bold'>{isRTL && trim.Name_ar ? trim.Name_ar : trim.Name}</span>
                                <span className='text-large-semi'>{isRTL && trim.Description_ar ? trim.Description_ar : trim.Description}</span>
                            </div>

                            <Separator className="my-0" />

                            {trim.OptionSets?.map((optionSet, index) => (
                                <div key={optionSet.ID} className=''>
                                    <div className="flex gap-4 items-center">
                                        {index + 1}
                                        <Separator orientation='vertical' className='h-4' />

                                        <div className="flex gap-3 items-center">
                                            <span className='text-base-semi'>{t('specs.engine')}</span>
                                            <Separator orientation='vertical' className='h-4' />
                                            <span className="text-base-regular">
                                                {optionSet.Engine}
                                            </span>
                                        </div>

                                        <div className="flex gap-3 items-center">
                                            <span className='text-base-semi'>{t('specs.transmission')}</span>
                                            <Separator orientation='vertical' className='h-4' />
                                            <div className="flex gap-2 text-base-regular">
                                                <span >
                                                    {optionSet.Transmission}
                                                </span>
                                                <span>
                                                    {optionSet.TransmissionGears} {t('specs.gears')}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {index !== trim.OptionSets.length - 1 && <Separator className="mt-2" />}

                                </div>
                            ))}

                        </Card>
                    ))}

                </div>

            </Suspense>
            {content &&
                <div className="">
                    <Separator className="mt-6" />
                    <StoryblokComponent blok={content} />
                </div>}
        </section >

    );
}



