
import { useLocale } from 'next-intl';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Separator } from './ui/separator';
import { Card } from './ui/card';

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
                <div key={brand.ID} className='overflow-hidden relative'>
                    <div className='flex gap-4 brands-scroll-container overflow-x-auto'>

                        <div className='flex gap-4 items-center'>
                            <Link href={`/vehicles/${brand.ID}`}>
                                <div className=' w-16 md:w-28 lg:w-32  h-44 flex items-center justify-center'>
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
                        <div className='flex gap-6'>

                            {brand.Models.map((model) => (

                                <Link href={`/vehicles/model/${model.ID}`} key={model.ID} className='flex'>
                                    <Card className='w-40'>
                                        <div className='h-40 align-middle flex items-center justify-center'>
                                            <Image src={`/${model.Image}`} alt={model.Name} width={180} height={180} />
                                        </div>
                                        <div className='text-center pt-4 font-bold'>
                                            <span>{isRTL && model.Name_ar ? model.Name_ar : model.Name}</span>
                                        </div>
                                        <div className="flex flex-wrap pt-2 justify-center">
                                        </div>
                                    </Card>
                                </Link>

                            ))}
                        </div>
                        <div className="end-padding md:hidden" />


                    </div>
                    <div className="brands-overlay md:hidden" />

                </div>
            ))}
        </section >
    );
}
