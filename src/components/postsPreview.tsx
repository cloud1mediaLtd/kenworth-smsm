"use client";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "./ui/carousel";
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

    const options = {
        containScroll: false,
        loop: true,
        duration: 20,
        align: 'start',
    };

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <>
            <h1 className='text-lg font-bold'>News & Events</h1>

            <Carousel className="w-full px-0 pt-6"
                setApi={setApi}
                opts={options}

            >
                <CarouselContent
                    className=" pr-20"
                >
                    {stories.map((story, index) => {
                        const { content } = story;
                        const mainImageBlok = content.body.find(blok => blok.component === 'main_image');
                        const titleBlok = content.body.find(blok => blok.component === 'title');
                        const excerptBlok = content.body.find(blok => blok.component === 'excerpt');

                        const cardClassName = `overflow-hidden relative ${index === 2 ? 'col-span-1' : ''}`;
                        return (

                            <CarouselItem key={index}
                                className="md:basis-1/2 lg:basis-1/3">
                                <div className="h-full">
                                    <Card className="h-full overflow-hidden">

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

            <div className="flex grow  gap-3 justify-center pt-6">
                <Link href={'/posts'} className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2">
                    All Posts <span>  </span>
                </Link>

                <div className="flex gap-1">
                    <button
                        className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollPrev}>
                        <ChevronLeftSquare className="w-5 h-5 " />
                    </button>
                    <button
                        className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2" onClick={scrollNext}>
                        <ChevronRightSquare className="w-5 h-5 " />
                    </button>
                </div>
            </div>
        </>

    );
}

