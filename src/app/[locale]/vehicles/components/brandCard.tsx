"use client"
import { useEffect, useState } from 'react';
import { Card } from 'components/ui/card';
import { Separator } from 'components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';
import DodgeBrandCard from './dodgeBrandCard';
import JeepBrandCard from './jeepBrandCard';
import ChryslerBrandCard from './chryslerBrandCard';
import FiatBrandCard from './fiatBrandCard';
import RamBrandCard from './ramBrandCard';

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

    const cardData = {
        brand: brand,
        isRTL: isRTL,
        isMobile: isMobile,
        width: width,
        height: height,
        mobileWidth: mobileWidth,
        mobileHeight: mobileHeight

    };

    const getCardLayout = (cardData) => {

        console.log("Card Layout", cardData.brand.id);
        switch (cardData.brand.id) {
            case 1:
                return <DodgeBrandCard key={cardData.brand.id} data={cardData} />;
            case 2:
                return <ChryslerBrandCard key={cardData.brand.id} data={cardData} />;
            case 3:
                return <JeepBrandCard key={cardData.brand.id} data={cardData} />;
            case 4:
                return <RamBrandCard key={cardData.brand.id} data={cardData} />;
            case 5:
                return <FiatBrandCard key={cardData.brand.id} data={cardData} />;
            // Add more cases for other specific brands
            default:
                return genericBrandCard(cardData);
        }
    };

    return getCardLayout(cardData);

    function genericBrandCard(cardData) {
        return (
            <div key={cardData.brand.id} className='col-span-1'>

                <Card key={cardData.brand.id} className='bg-black rounded-2xl'>
                    <Card className='flex flex-col overflow-hidden rounded-none rounded-t-lg border-0 pb-3  h-[350px]'>
                        <div className='flex gap-5 items-center p-4'>
                            <div className='flex items-center justify-center relative' style={{

                                height: cardData.isMobile ? cardData.mobileHeight : cardData.height,
                                width: cardData.isMobile ? cardData.mobileWidth : cardData.width,
                                minHeight: 44,
                                minWidth: 44
                            }}>
                                <Image
                                    src={`/${cardData.brand.image}`}
                                    alt={brand.name}
                                    fill={true}
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <Separator orientation='vertical' className='h-8' />
                            <div>
                                Motion and Emotion
                            </div>
                        </div>


                        <div className='flex gap-2 brands-scroll-container overflow-x-scroll overflow-hidden p-4 grow'>
                            {cardData.brand.models.map((model) => (
                                <Link href={`/vehicles/model/${model.id}`} key={model.id} className='grow min-w-52'>
                                    <div>
                                        <div className='h-32 align-middle flex items-center justify-center p-1'>
                                            <Image src={`/${model.image}`} alt={model.name} width={160} height={160} />
                                        </div>
                                        <div className='text-center pt-4 font-bold'>
                                            <span>{cardData.isRTL && model.name_ar ? model.name_ar : model.name}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                    </Card>
                    <div className="flex justify-between items-center py-3 px-6 pt-3">
                        <h2 className='font-bold text-white'>{cardData.brand.name}</h2>
                        <div className="flex gap-2 items-center">

                            <Link href={`/vehicles/${cardData.brand.id}`}
                                className='border-2 border-white rounded-full px-3 text-sm text-white'>
                                More
                            </Link>
                        </div>
                    </div>
                </Card>


            </div>
        );
    }
}
