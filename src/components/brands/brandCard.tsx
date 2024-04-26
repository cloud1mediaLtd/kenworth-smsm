"use client";
import { Card } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BrandCard({ brand, locale, width, height, mobileWidth, mobileHeight }) {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isMobile = windowWidth <= 768;

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isRTL = locale === 'ar';

    return (
        <Card key={brand.ID} className='overflow-hidden relative'>
            <div className='flex flex-col items-center'>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
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

                <div className='flex gap-6 brands-scroll-container overflow-x-scroll'>

                    {brand.Models.map((model) => (

                        <Link href={`/vehicles/model/${model.ID}`} key={model.ID} className='shrink-0'>
                            <Card className=''>

                                <div className='h-44 align-middle flex items-center justify-center p-1'>
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
            <Separator
                orientation='horizontal'
                className='mt-6'
            />
            <div className="brands-overlay md:hidden" />

        </Card>
    );
}

