//  src/app/en/vehicles/model[id]/page.tsx
import PageLayout from "components/PageLayout";
import { useLocale, useTranslations } from "next-intl";
import {
    getTranslator,
    getFormatter,
    getNow,
    getTimeZone
} from 'next-intl/server';
import Image from "next/image";


// A function that creates a translator
async function createTranslator(locale) {
    const t = await getTranslator(locale, 'ContactPage');
    return t;
}

export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslator(locale, 'LocaleLayout');
    const format = await getFormatter(locale);
    const now = await getNow(locale);
    const timeZone = await getTimeZone(locale);
}
export default async function getModel

    ({ params }: { params: { id: string } },) {

    const model = await fetch(
        `https://blooming-anchorage-31706-0fa311717c9a.herokuapp.com/models/${params.id}`
    ).then((res) => {
        return res.json();
    });
    console.log("model", model);

    const locale = useLocale();

    const isRTL = locale === 'ar';
    const t = await getTranslator(locale, 'VehiclesPage');


    return (
        <PageLayout title={''}>
            <main className="sm:pt-0 xl:mx-auto xl:max-w-7xl">
                <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='col-span-2'>
                        <div className='flex items-center justify-center tracking-normal'>
                            <Image
                                src={`/${model.Image}`}
                                alt={`/${model.Name}`}
                                width="800"
                                height="800"
                            />
                        </div>
                        <hr className='my-4' />
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
                            <hr />
                            <div className='flex justify-between  tracking-normal'>
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
                            <hr />
                            <hr />

                        </div>
                    </div>
                    <div className='space-y-5'>

                        <div className='w-full flex items-center justify-center'>
                            <span>
                                <Image className='' src={`/${model.Brand.Image}`} alt={model.Brand.Name} width={300} height={300} />

                            </span>

                            <span className='text-2xl font-bolds'>{isRTL && model.Name_ar ? model.Name_ar : model.Name}</span>
                        </div>
                        <hr />

                        <p className='text-base text-center tracking-normal md:text-start'>
                            {isRTL && model.Description_ar ? model.Description_ar : model.Description}
                        </p>
                        <hr />
                        <div className='space-y-3'>
                            <p className='text-2xl tracking-normal'>{t('specs.price')} ---,---</p>
                            <div className='text-sm tracking-normal'>RRP: --,---</div>
                            <div className='text-sm text-red-600 tracking-normal'>You Save: 2000 LD</div>
                        </div>
                        <hr />

                        <div className='flex gap-3'>
                            <div className='flex h-14 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-lg justify-center items-center'>
                                <div className='tracking-wide text-lg'>Enquire</div>
                            </div>
                            <div className='flex h-14 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-lg justify-center items-center'>
                                <div className='tracking-wide text-lg'>Download Pdf</div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </PageLayout>
    );
}



