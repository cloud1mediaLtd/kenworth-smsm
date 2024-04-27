"use client";
import { Card } from "components/ui/card";
import { Badge } from "components/ui/badge";
import { CardContent, CardFooter, CardHeader } from "components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Separator } from "components/ui/separator";
import React from "react";
import { CarouselApi } from "components/ui/carousel";
import { Button } from "components/ui/button";


export default function FleetOffers() {
    const [api, setApi] = React.useState<CarouselApi>()

    const scrollPrev = React.useCallback(() => {
        api?.scrollPrev()
    }, [api])

    const scrollNext = React.useCallback(() => {
        api?.scrollNext()
    }, [api])
    return (
        <Card className="bg-black">

            <Card className='flex flex-col md:flex-row overflow-hidden rounded-none rounded-t-lg border-0'>

                <div className='relative w-full min-h-52 basis-7/12'>
                    <Image
                        src="/fiatrange.jpg"
                        alt=""
                        fill={true}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-cover'
                    />
                </div>

                <div className='flex flex-col basis-5/12'>

                    <CardHeader>
                        <Badge className='flex justify-center bg-black'>
                            Fleet | Mega Discounts
                        </Badge>

                        <div className="flex relative items-center justify-center gap-3 pt-3" >
                            <Image
                                src='/logos/fiat_professional_logo.png'
                                alt='Mopar'
                                width={50}
                                height={90}
                                className="h-12 object-contain"
                            />
                            <Separator orientation='vertical' className='h-4' />
                            <Image
                                src='/logos/ram_professional.jpeg'
                                alt='Mopar'
                                width={140}
                                height={80}
                                className="h-10 object-contain"
                            />
                        </div>
                    </CardHeader>


                    <CardContent className='h-full flex flex-col gap-3 items-center'>

                        <Separator className="my-0 opacity-85" />

                        <h2 className='text-slate-900 pb-2'>
                            Professional Range
                        </h2>
                        <p className="text-sm font-semibold text-center text-slate-700 hidden md:block">
                            Whether you're in need of replacement parts or looking to enhance your vehicle's performance.

                        </p>

                        <Separator className="mt-4 opacity-85 hidden md:block" />

                    </CardContent>

                    <CardFooter className="flex justify-between">

                        <Card className='flex items-center gap-4 bg-black'>

                            <div className='flex justify-center items-center gap-3 px-2 py-1'>

                                <Image
                                    src='/logos/Mopar_logo_black.png'
                                    alt='Mopar'
                                    width={80}
                                    height={80}
                                    className="h-8 w-8"
                                />
                                <div className='flex flex-row md:flex-col leading-3 gap-1'>
                                    <span className='text-sm font-semibold leading-none text-slate-50'>
                                        Warranty
                                    </span>
                                </div>

                            </div>
                        </Card>

                        <Link href="/business">
                            <Button className='flex items-center gap-2'>
                                <span>
                                    View
                                </span>
                            </Button>
                        </Link>

                    </CardFooter>
                </div>

            </Card>
            <div className="flex justify-between items-center py-3 px-6">
                <h2 className='font-bold text-white'>Business center</h2>
                <div className="flex gap-2 items-center">

                    <Link href="/offers"
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