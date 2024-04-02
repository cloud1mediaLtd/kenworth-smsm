
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';

async function getData() {
    const res = await fetch('https://smedbackend.fly.dev/vehicles', { next: { revalidate: 3600 } })
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}


export default async function Brands({ locale }) {
    const data = await getData();

    console.log(data);

    for (const brand of data) {
        brand.Models.sort((a, b) => a.Name.localeCompare(b.Name));
    }


    const isRTL = locale === 'ar';
    return (
        <section className="">
            {data.map((brand) => (
                <div key={brand.ID}>
                    <div className='flex gap-4'>

                        <div className='flex gap-4 items-center'>
                            <Link href={`/vehicles/${brand.ID}`}>
                                <div className='w-44 h-44 flex items-center justify-center p-8'>
                                    <Image className=''
                                        src={`/${brand.Image}`}
                                        alt={brand.Name}
                                        width={180}
                                        height={180}
                                    />
                                </div>
                            </Link>
                            <Separator orientation='vertical' className='h-36' />

                        </div>
                        <div className='flex gap-12'>

                            {brand.Models.map((model) => (
                                <Link href={`/vehicles/model/${model.ID}`} key={model.ID} className='flex'>
                                    <div key={model.ID} className=''>
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
                    <Separator className='my-4' />

                </div>
            ))}
        </section >
    );
}
