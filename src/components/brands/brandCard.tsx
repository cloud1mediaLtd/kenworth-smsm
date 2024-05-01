"use client"

import { useEffect, useState } from 'react';
import { Card } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from 'lucide-react';


export default function BrandCard({ brand, locale, width, height, mobileWidth, mobileHeight }) {
    // Initialize state without referencing window
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Set initial width
        setWindowWidth(window.innerWidth);

        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        // Setup event listener for resize
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;
    const isRTL = locale === 'ar';

    return (
        <div key={brand.ID} >

            <Card key={brand.ID} className='bg-black'>
                <Card className='flex flex-col overflow-hidden rounded-none rounded-t-lg border-0'>
                    <div className='flex gap-5 items-center p-4'>
                        <div className='flex items-center justify-center relative' style={{

                            height: isMobile ? mobileHeight : height,
                            width: isMobile ? mobileWidth : width,
                            minHeight: 44,
                            minWidth: 44
                        }}>
                            <Image
                                src={`/${brand.Image}`}
                                alt={brand.Name}
                                fill={true}
                                style={{ objectFit: "contain" }}
                            />
                        </div>
                        <Separator orientation='vertical' className='h-8' />
                        <div>
                            Brand tagline here...
                        </div>
                    </div>


                    <div className='flex gap-6 brands-scroll-container overflow-x-scroll overflow-hidden p-4 grow'>
                        {brand.Models.map((model) => (
                            <Link href={`/vehicles/model/${model.ID}`} key={model.ID} className='grow min-w-44'>
                                <Card>
                                    <div className='h-44 align-middle flex items-center justify-center p-1'>
                                        <Image src={`/${model.Image}`} alt={model.Name} width={180} height={180} />
                                    </div>
                                    <div className='text-center pt-4 font-bold'>
                                        <span>{isRTL && model.Name_ar ? model.Name_ar : model.Name}</span>
                                    </div>
                                </Card>
                            </Link>
                        ))}
                    </div>

                </Card>
                <div className="flex justify-between items-center py-3 px-6">
                    <h2 className='font-bold text-white'>{brand.Name}</h2>
                    <div className="flex gap-2 items-center">

                        <Link href={`/vehicles/${brand.ID}`}
                            className='border-2 border-white rounded-full px-3 text-sm text-white'>
                            More
                        </Link>
                    </div>
                </div>
            </Card>

            <Separator className="mt-4 hidden md:block" />

        </div>

    );
}
