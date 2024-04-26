"use client"

import { useEffect, useState } from 'react';
import { Card } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

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

    return (<>

        <Card key={brand.ID} className='overflow-hidden relative p-6'>
            <div className='flex flex-col'>
                <div className='flex gap-5 items-center'>
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

                <Separator className='my-3' />

                <div className='flex gap-6 brands-scroll-container overflow-x-scroll overflow-hidden'>
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

            </div>
        </Card>

        <Separator orientation='horizontal' className='' />

    </>

    );
}
