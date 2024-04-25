"use client";
import Link from "next/link";
import OfferMainCard from "./offerMainCard";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Button } from "components/ui/button";
import FleetOffers from "./fleetOffersCard";

const offers = [
    {
        badge: 'New 2025 | Early Bird Offers',
        badgeClass: 'bg-black',
        brand: { name: 'Jeep', logo: '/logos/jeep_logo.svg', logoWidth: 100, logoHeight: 100 },
        model: {
            name: 'Grand Cheroke',
            description: 'Setting The Bar For Adventure',
            image: '/jeep-grand-cherokee-4xe-overview-canvas-2-1920X922.jpg'
        },
        description: 'Setting The Bar For Adventure',
        warranty: 'Warranty',
        finance: 'Finance',
        link: '/vehicles/model/16',
        bg: 'bg-[#9C101A]'
    },
    {
        badge: 'New | Now In Showroom',
        badgeClass: 'bg-black',
        brand: { name: 'Chrysler', logo: '/logos/chryslerlogo.png', logoWidth: 170, logoHeight: 80 },
        model: {
            name: '300',
            description: 'High-performance And Personal Luxury',
            image: '/2023-chrysler-300-VLP-design-feature-grid-01.avif'
        },
        description: 'High-performance And Personal Luxury',
        warranty: 'Warranty',
        finance: 'Finance',
        link: '/vehicles/model/16',
        bg: 'bg-[#9C101A]'
    }
]

export default function Offers() {
    const [api, setApi] = React.useState<CarouselApi>()

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    return (
        <div className='flex flex-col w-full'>
            <div className="flex justify-between items-center pb-4">
                <h1 className='font-bold'>Latest Offers</h1>
                <div className="flex gap-2 items-center">

                    <Link href="/offers"
                        className='border-2 border-black rounded-full px-3 text-sm'>
                        More
                    </Link>
                    <div className="flex gap-1">

                        <button
                            className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollPrev}>
                            <ArrowLeftCircleIcon className='h-6 w-6 text-black' />
                        </button>
                        <button
                            className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollNext}>
                            <ArrowRightCircleIcon className='h-6 w-6 text-black' />
                        </button>

                    </div>
                </div>

            </div>

            <Carousel className="w-full px-0 basis-4/6"
                setApi={setApi}
                plugins={[
                    // Autoplay({
                    //     delay: 15000,
                    // }),
                ]}
                opts={{
                    loop: true,
                }}

            >
                <CarouselContent className="-ml-4">

                    {offers.map((offer, index) => {
                        return (
                            <CarouselItem key={index}
                                className="">
                                <OfferMainCard key={index} offer={offer} />
                            </CarouselItem>
                        )
                    })}

                </CarouselContent>

            </Carousel>


            {/* 
        <div className='flex flex-col lg:flex-row gap-8'>

          <Card className='overflow-hidden items-center hover:bg-[#0245B2]/90 bg-[#0245B2] md:basis-3/5'>
            <Link href="/parts" className='h-24 flex items-center'>
              <div className='relative h-full w-[300px] max-w-[250px]'>

                <Image
                  src='/moparService.jpeg'
                  alt='Mopar'
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />

              </div>
              <div className='p-4 grow flex flex-col gap-3 text-white font-semibold'>
                <h3 className=''>Free Oil & Filter change*</h3>

              </div>
            </Link>
          </Card>

          <Card className='overflow-hidden items-center hover:bg-slate-50 md:basis-2/5'>
            <Link href="/parts" className='h-24 flex'>
              <div className='relative h-full w-[300px] max-w-[250px]'>
                <Image
                  src='/WINCH_GUARD_LIGHT_MOUNTING BRACKETS.jpg'
                  alt='Mopar'
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className='p-4 grow flex gap-3 items-center'>
                <h3>New Jeep Wrangler Accessories</h3>

              </div>
            </Link>

          </Card>

        </div> */}

        </div>
    );
}