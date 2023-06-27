"use client";
import { useLocale } from 'next-intl';
import Link from 'next-intl/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

async function getData() {
    const res = await fetch('https://blooming-anchorage-31706-0fa311717c9a.herokuapp.com/vehicles');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;
}

export default function Brands() {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getData().then(data => {
            const sortedBrands = data.sort((a, b) => b.Models.length - a.Models.length);

            setBrands(sortedBrands);
        });
    }, []);
    const locale = useLocale();

    const isRTL = locale === 'ar';
    return (
        <section className="sm:pt-0 xl:mx-auto xl:max-w-7xl">
            <div className='grid grid-cols-5 gap-8 my-0 px-5 lg:px-8 xl:px-0'>
                {brands.map((brand) => (
                    <div key={brand.ID} className='mx-auto text-center'>
                        <div className=''>
                            <Link href={`/vehicles/${brand.ID}`}>
                                <div className='h-40 align-middle flex items-center justify-center p-8'>
                                    <Image className=' ' src={`/${brand.Image}`} alt={brand.Name} width={180} height={180} />
                                </div>
                            </Link>
                        </div>
                        <div>
                            {/*}
                            <div className='pb-4 border-b border-gray-200'>
                                <span>{isRTL && brand.Name_ar ? brand.Name_ar : brand.Name}</span>

                            </div>
                            */}


                            {brand.Models.map((model) => (
                                <Link href={`/vehicles/model/${model.ID}`} key={model.ID}>
                                    <div key={model.ID} className='border-b border-gray-200 pb-4'>
                                        <div className='h-40 align-middle flex items-center justify-center'>
                                            <Image src={`/${model.Image}`} alt={model.Name} width={180} height={180} />
                                        </div>
                                        <div className='text-center pt-4 font-bold'>
                                            <span>{isRTL && model.Name_ar ? model.Name_ar : model.Name}</span>
                                        </div>
                                        <div className="flex flex-wrap pt-2 justify-center">
                                            {/*}
                                        <div className="flex items-center justify-center"> {/* Add 'justify-center' class
                                        {model.Trims.map((trim) => (
                                            <div className="bg-gray-800 text-white m-1 py-1 px-2 rounded-md text-xs inline-flex items-center" key={trim.ID}>
                                                <span className="" style={{ lineHeight: '1', verticalAlign: 'middle' }}>
                                                    {isRTL && trim.Name_ar ? trim.Name_ar : trim.Name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                        */}
                                        </div>


                                    </div>
                                </Link>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section >
    );
}
