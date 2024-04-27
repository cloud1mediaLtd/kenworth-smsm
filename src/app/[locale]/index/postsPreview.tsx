"use client";
import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, ChevronLeftSquare, ChevronRightSquare } from "lucide-react";
import React from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../../../components/ui/carousel";
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay";
import { Separator } from "components/ui/separator";


export default function PostsPreview({ stories }) {
    // console.log(stories)
    const [api, setApi] = React.useState<CarouselApi>()

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])

    const scrollToIndex = (index) => {
        api?.scrollTo(index);
    };

    return (
        <Card className='flex flex-col w-full bg-black'>
            <Card className='flex flex-col md:flex-row overflow-hidden rounded-none rounded-t-lg border-0'>

                <Carousel className="w-full px-0 p-4 basis-7/12"
                    setApi={setApi}
                    plugins={[
                        Autoplay({
                            delay: 12000,
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
                                    <Link href={`/posts/${story.slug}`}>
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
                                                    <CardTitle>
                                                        {titleBlok?.title}
                                                    </CardTitle>
                                                    <CardDescription className='line-clamp-2'>{excerptBlok?.excerpt}</CardDescription>
                                                </CardHeader>
                                            </div>

                                        </Card>

                                    </Link>
                                </CarouselItem>
                            )
                        })}
                    </CarouselContent>

                </Carousel>
                <div className="flex flex-col p-6 basis-5/12">
                    {stories.map((story, index) => (
                        <div key={index}>
                            <Link href={`/posts/${story.slug}`}

                                onMouseEnter={() => scrollToIndex(index)}>{story.name}
                            </Link>
                            <Separator className="my-2 opacity-85" />
                        </div>
                    ))}
                </div>
            </Card>

            <div className="flex justify-between items-center py-3 px-6">
                <h2 className='font-bold text-white'>
                    News & Events
                </h2>
                <div className="flex gap-2 items-center">

                    <Link href="/posts"
                        className='border-2 border-white rounded-full px-3 text-sm text-white'>
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

