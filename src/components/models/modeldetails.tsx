//src/components/models/modeldetails.tsx
"use client";
import Image from 'next/image';
import Link from 'next-intl/link';
import { useEffect, useState } from 'react';
import PageLayout from 'components/PageLayout';

type Model = {
    id: number;
    Name: string;
}

type ModelDetailsProps = {
    id: number;
};

export default function Modeldetails({ id }: ModelDetailsProps) {
    const [data, setData] = useState<Model | null>(null);

    const fetchData = async () => {
        const res = await fetch(`https://blooming-anchorage-31706-0fa311717c9a.herokuapp.com/models/${id}`);
        const brand = await res.json();
        setData(brand);
        console.log("data", brand);
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    function mapData(model) {
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
                                        <span className='text-base'>Engine</span>
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
                                <span><Link href={`/vehicles/${model.Brand.ID}`}>
                                    <Image className='' src={`/${model.Brand.Image}`} alt={model.Brand.Name} width={300} height={300} />
                                </Link>
                                </span>

                                <span className='text-2xl font-bolds'>{model.Name}</span>
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

    if (!data) {
        return <div>Loading...</div>;
    }

    return <>{mapData(data)}</>;
}

