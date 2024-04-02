//  src/app/en/vehicles/model[id]/page.tsx
import PageLayout from "components/PageLayout";
import { Button } from "components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import {
    getFormatter,
    getNow,
    getTimeZone,
    getTranslations
} from 'next-intl/server';
import Image from "next/image";

async function getData(id: string) {
    const res = await fetch(`https://smedbackend.fly.dev/models/${id}`, { next: { revalidate: 3600 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


// // A function that creates a translator
// async function createTranslator(locale) {
//     const t = await getTranslations({ locale, namespace: 'ContactPage' });
//     return t;
// }

// export async function generateMetadata({ params: { locale } }) {
//     const t = await getTranslations({ locale, namespace: 'LocaleLayout' });
//     const format = await getFormatter(locale);
//     const now = await getNow(locale);
//     const timeZone = await getTimeZone(locale);
// }

export default async function getModel

    ({ params }: { params: { id: string } }) {
    const model = await getData(params.id);
    const locale = useLocale();
    const isRTL = locale === 'ar';
    const t = await getTranslations('VehiclesPage');

    return (
        <PageLayout title={''}>
            <section className=''>

                <div className='flex flex-col md:flex-row gap-6'>
                    <Image
                        src={`/${model.Image}`}
                        alt={`/${model.Name}`}
                        width="800"
                        height="800"
                    />

                    <div className='space-y-5 '>

                        <div className='grid grid-cols-2 gap-2 items-center justify-center'>
                            <span className="justify-self-center align-self-center">
                                <Image className='p-2' src={`/${model.Brand.Image}`} alt={model.Brand.Name} width={220} height={220} />
                            </span>

                            <span className='text-xl font-bolds text-center'>{isRTL && model.Name_ar ? model.Name_ar : model.Name}</span>
                        </div>
                        <hr />

                        <p className='text-base text-center tracking-normal md:text-start'>
                            {isRTL && model.Description_ar ? model.Description_ar : model.Description}
                        </p>
                        <div className='space-y-3'>
                            <p className='text-2xl tracking-normal'>{t('specs.price')} ---,---</p>
                            <div className='text-sm tracking-normal'>RRP: --,---</div>
                            <div className='text-sm text-red-600 tracking-normal'>You Save: 2000 LD</div>
                        </div>
                        <hr />

                        <div className='flex gap-3'>

                            <Button className="w-full py-6">
                                Enquire
                            </Button>
                            <Button className="w-full py-6">
                                Download Pdf
                            </Button>

                        </div>

                    </div>
                </div>

                <div className=''>

                    <div className='hidden md:grid grid-cols-2 gap-5'>
                        <div className='flex justify-between tracking-normal'>
                            <div>
                                <span className='text-base'>Fuel type</span>
                            </div>
                            <div>
                                <span className='text-base'>Petrol</span>
                            </div>
                        </div>
                        <div className='flex justify-between tracking-normal'>
                            <div>
                                <span className='text-base'>{t('specs.bodytype')}</span>
                            </div>
                            <div>
                                <span className='text-base'>Saloon</span>
                            </div>
                        </div>
                        <hr />
                        <div className='flex justify-between tracking-normal'>
                            <div>
                                <span className='text-base'>{t('specs.engine')}</span>
                            </div>
                            <div>
                                <span className='text-base'>2.0L</span>
                            </div>
                        </div>
                        <div className='flex justify-between  tracking-normal'>
                            <div>
                                <span className='text-base'>{t('specs.transmission')}</span>
                            </div>
                            <div>
                                <span className='text-base'>Automatic</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </PageLayout>
    );
}



