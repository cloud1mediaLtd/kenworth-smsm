"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "components/ui/carousel";
import { Separator } from "components/ui/separator";
import clsx from "clsx";
import Autoplay from "embla-carousel-autoplay"
import type { OptionsType } from "embla-carousel-autoplay/components/Options";

import { ChevronRightSquare } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";


export function ServicesCarousel() {
    const t = useTranslations('Categories');

    const locale = useLocale();

    const isRTL = locale === 'ar';
    const titleClass = clsx({ 'pl-5': isRTL, 'pr-5': !isRTL });

    const services = [
        {
            key: t('newArrivals.title'),
            href: '/new',
            imageSrc: '/fiatThumb.webp',
        },
        {
            key: t('vehicles.title'),
            href: '/vehicles',
            imageSrc: '/jeep.jpg',
        },
        {
            key: t('spareParts.title'),
            href: '/parts',
            imageSrc: '/parts.jpeg',
        },
        {
            key: t('service.title'),
            href: '/service',
            imageSrc: '/moparService.jpeg',
        },
        { key: t('special.title'), href: '#', imageSrc: '/saleRed.png' },
    ]


    const options = {
        align: 'start',
        containScroll: false,
        loop: true,
        duration: 20,
    };

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true })
    )

    return (
        <div className="p-4" >
            <Carousel
                plugins={[plugin.current]}
                opts={options}

                className=""
            >
                <CarouselContent
                    className="pr-10"
                >
                    {services.map((service, index) => (

                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3">
                            <Link
                                href={service.href}
                            >

                                <div className="">
                                    <Card className={"overflow-hidden"}>
                                        <div className="relative">
                                            <div className={"absolute inset-0 bg-primary/50"} />

                                            <div className=' min-h-44 h-full'>
                                                <img
                                                    src={service.imageSrc}
                                                    alt=""
                                                    className="object-cover object-center w-full h-44"
                                                />
                                            </div>

                                        </div>
                                        <CardHeader className="relative">
                                            <CardTitle className="">
                                                <span className=" text-large-semi">{service.key}</span>
                                            </CardTitle>
                                            <Separator className="my-3" />
                                            <CardDescription className="">
                                                Description
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </div>
                            </Link>

                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            <div className="flex grow pt-6 gap-3 justify-center ">
                <Link href={'/expertise'} className="flex items-center gap-2 text-small-semi text-primary hover:text-slate-500 hover:underline underline-offset-2">
                    Our Expertise
                    <span>
                        <ChevronRightSquare className="w-5 h-5" />
                    </span>
                </Link>
            </div>
        </div >
    )
}

