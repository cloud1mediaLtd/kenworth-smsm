"use client";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../../components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";


export default function PostsPreview({ stories }) {
    const [api, setApi] = React.useState<CarouselApi>()

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    return (
        <>
            <div className="flex justify-between items-center pb-4">
                <h1 className='font-bold'>
                    News & Events
                </h1>
                <div className="flex gap-2 items-center">

                    <Link href="/posts"
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
            <Card className="flex">
                <Carousel className="w-full px-0 p-4 basis-4/6"
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 4000,
                        }),
                    ]}
                    opts={{
                        loop: true,
                        dragFree: true,
                        slidesToScroll: 1,
                    }}

                >
                    <CarouselContent className="-ml-4">

                        {stories.map((story, index) => {
                            const { content } = story;
                            const mainImageBlok = content.body.find(blok => blok.component === 'main_image');
                            const titleBlok = content.body.find(blok => blok.component === 'title');
                            const excerptBlok = content.body.find(blok => blok.component === 'excerpt');

                            const cardClassName = `overflow-hidden relative ${index === 2 ? 'col-span-1' : ''}`;
                            return (

                                <CarouselItem key={index}
                                    className="">
                                    <div className="">
                                        <Card className="overflow-hidden">

                                            <div className='flex flex-col grow'>

                                                {mainImageBlok && mainImageBlok.main_image.length > 0 && (
                                                    <div className='relative h-64'>
                                                        <Image
                                                            src={mainImageBlok.main_image[0].filename}
                                                            alt=""
                                                            fill={true}
                                                            sizes='(max-width: 640px) 640px, 1920px'
                                                            style={{ objectFit: "cover" }}
                                                        />
                                                    </div>
                                                )}
                                                <CardHeader className='h-36'>
                                                    <CardTitle>{titleBlok?.title}</CardTitle>
                                                    <CardDescription className='line-clamp-2'>{excerptBlok?.excerpt}</CardDescription>
                                                </CardHeader>
                                            </div>

                                        </Card>

                                    </div>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>

                </Carousel>
                <div className="p-6">
                    List posts here
                </div>
            </Card>
        </>

    );
}

