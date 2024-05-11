"use client";
import Link from "next/link";
import OfferMainCard from "./offerMainCard";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "components/ui/carousel";
import React from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Card } from "components/ui/card";
import { offers } from "../../../../data/offers";


export default function Offers() {
    const [api, setApi] = React.useState<CarouselApi>()

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    return (
        <Card className='flex flex-col w-full bg-kenbg rounded-t-2xl'>


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

            <div className="flex justify-between items-center py-5 px-6">
                <h2 className='font-bold text-white'>Latest Offers</h2>
                <div className="flex gap-2 items-center">

                    <Link href="/offers"
                        className='border-2 border-white rounded-full px-5 text-sm text-white'>
                        More
                    </Link>
                    <div className="flex gap-1">

                        <button
                            className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollPrev}>
                            <ArrowLeftCircleIcon className='h-6 w-6 text-white' />
                        </button>
                        <button
                            className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollNext}>
                            <ArrowRightCircleIcon className='h-6 w-6 text-white' />
                        </button>

                    </div>
                </div>

            </div>

        </Card>
    );
}