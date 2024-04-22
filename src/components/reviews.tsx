"use client";

import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Link from "next/link";


const reviews = [
    {
        name: "John Doe",
        review: "The team at Sunlight Removals were fantastic. They were professional, efficient and friendly. I would highly recommend them to anyone looking for a reliable and affordable removals company.",
        brand: "/images/google.svg",
        rating: 5,
        reviewQuantity: 156

    },
    {
        name: "John Doe",
        review: "The team at Sunlight Removals were fantastic. They were professional, efficient and friendly. I would highly recommend them to anyone looking for a reliable and affordable removals company.",
        brand: "/images/cmm.png",
        rating: 5,
        reviewQuantity: 580

    },
    {
        name: "John Doe",
        review: "The team at Sunlight Removals were fantastic. They were professional, efficient and friendly. I would highly recommend them to anyone looking for a reliable and affordable removals company.",
        brand: "/images/trustpilot.svg",
        rating: 5,
        reviewQuantity: 42

    },
    {
        name: "John Doe",
        review: "The team at Sunlight Removals were fantastic. They were professional, efficient and friendly. I would highly recommend them to anyone looking for a reliable and affordable removals company.",
        brand: "/images/checkatrade.svg",
        rating: 5,
        reviewQuantity: 334

    }
]

export default function Reviews() {
    const [api, setApi] = React.useState<CarouselApi>()

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    const options = {
        loop: true,


    }

    return (
        <>
            <section className="flex items-center bg-black min-h-96">
                <div className="flex flex-col gap-3 content-container-no-bg">
                    <div className="text-center flex flex-col">
                        <span className="text-white text-xl-semi whitespace-nowrap">
                            Highly Rated
                        </span>
                        <span className="text-base-semi text-slate-100">
                            580+ positive reviews from satisfied clients.
                        </span>
                    </div>
                    <div className="px-0">
                        <Carousel className="content-container-no-bg px-0 md:px-20"
                            setApi={setApi}
                            opts={options}

                        >
                            <CarouselContent
                                className="pr-12"
                            >
                                {reviews.map((review, index) => (
                                    <CarouselItem key={index}>
                                        <div className="h-full">
                                            <Card className="h-full">
                                                <CardContent className="flex flex-col items-center gap-3 justify-center p-4">
                                                    <div>
                                                        <p className="text-small-semi text-center">
                                                            {review.review}
                                                        </p>
                                                        <div className="flex items-center gap-3 justify-center">
                                                            <span className="text-small-semi text-slate-500">{review.name}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4 items-center">
                                                        <div>
                                                            <img
                                                                className="max-w-24 h-12 object-contain"
                                                                src={review.brand}
                                                                alt={review.name} />
                                                        </div>
                                                        <Separator orientation="vertical" className="h-4" />

                                                        <div className="flex gap-1 items-center">
                                                            <span className="text-small-semi text-slate-500">
                                                                Reviews
                                                            </span>

                                                            <span className="text-small-semi text-slate-500">{review.reviewQuantity}</span>
                                                            {Array.from({ length: review.rating }).map((_, index) => (
                                                                <span key={index} className="text-orange-500 text-xsmall-semi text-shadow">⭐</span>
                                                            ))}

                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>

                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>

                        </Carousel>

                    </div>

                    <div className="flex grow  gap-3 justify-center">
                        <Link href={'/reviews'} className="flex items-center gap-2 text-small-semi text-white hover:text-slate-500 hover:underline underline-offset-2">
                            All Reviews <span>  </span>
                        </Link>

                        <div className="flex gap-1">
                            <button
                                className="flex items-center gap-2 text-small-semi text-white hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollPrev}>
                                <ChevronLeftSquare className="w-5 h-5 text-white" />
                            </button>
                            <button
                                className="flex items-center gap-2 text-small-semi text-white hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollNext}>
                                <ChevronRightSquare className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>





                </div>


            </section>


        </>
    )
}