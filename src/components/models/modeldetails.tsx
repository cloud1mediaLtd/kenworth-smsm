import PageLayout from "components/PageLayout";
import Image from "next/image";

export default function ModelDetails() {
    return (
        <PageLayout title={''}>
            <main className="sm:pt-0 xl:mx-auto xl:max-w-7xl">
                <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    <div className='col-span-2'>
                        <div className='flex items-center justify-center'>
                            <Image
                                src={`/${model.Image}`}
                                alt={`/${model.Name}`}
                                width="800"
                                height="800"
                            />
                        </div>
                        <hr className='my-4' />
                        <div className='grid grid-cols-2 gap-5'>
                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-base'>Fuel type</span>
                                </div>
                                <div>
                                    <span className='text-base'>Petrol</span>
                                </div>


                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-base'>Body type</span>
                                </div>
                                <div>
                                    <span className='text-base'>Saloon</span>
                                </div>

                            </div>
                            <hr />
                            <hr />
                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-base'>{t('title')}</span>
                                </div>
                                <div>
                                    <span className='text-base'>2.0L</span>
                                </div>


                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <span className='text-base'>Gear box</span>
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

                        <p className='text-base '>{model.Description}</p>
                        <hr />
                        <div className='space-y-3'>
                            <p className='text-2xl'>Price: ---,---</p>
                            <div className='text-sm'>RRP: --,---</div>
                            <div className='text-sm text-red-600'>You Save: 2000 LD</div>
                        </div>
                        <hr />

                        <div className='space-y-2'>
                            <div className='flex h-12 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-sm justify-center items-center'>
                                <div className='tracking-wide'>Enquire</div>
                            </div>
                            <div className='flex h-12 w-full bg-gray-800 hover:bg-gray-900 text-white rounded-sm justify-center items-center'>
                                <div className='tracking-wide'>Download Pdf</div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </PageLayout>
    );
}