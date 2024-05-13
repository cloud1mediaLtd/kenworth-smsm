"use client";
import Link from "next/link";
import OfferMainCard from "./offerMainCard";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "components/ui/carousel";
import React, { useEffect } from "react";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Card } from "components/ui/card";
import { offers } from "../../../../data/offers";
import { useLocale, useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

export default function Offers({ isRtl }) {
    const t = useTranslations('OffersPage');
    const locale = useLocale();
    const [api, setApi] = React.useState<CarouselApi>();

    const scrollPrev = React.useCallback(() => {
        if (isRtl) {
            api?.scrollNext();
        } else {
            api?.scrollPrev();
        }
    }, [api, isRtl]);

    const scrollNext = React.useCallback(() => {
        if (isRtl) {
            api?.scrollPrev();
        } else {
            api?.scrollNext();
        }
    }, [api, isRtl]);

    // useEffect(() => {
    //     // Ensure carousel updates on locale change or navigation
    //     api.reInit();
    // }, [locale, api]);

    return (
        <Card className="flex flex-col w-full bg-kenbg rounded-t-2xl">
            <Carousel
                key={locale} // Force re-render on locale change
                className={`w-full px-0 basis-4/6`}
                setApi={setApi}
                plugins={[
                    Autoplay({
                        delay: 10000,
                    }),
                ]}
                opts={{
                    loop: true,

                    dragFree: true,
                    slidesToScroll: 1,
                    direction: isRtl ? "rtl" : "ltr",
                }}
            >
                <CarouselContent className="-ml-4">
                    {offers.map((offer, index) => {
                        return (
                            <CarouselItem key={index} className="w-full">
                                <OfferMainCard key={index} offer={offer} />
                            </CarouselItem>
                        );
                    })}
                </CarouselContent>
            </Carousel>

            <div className="flex justify-between items-center py-4 px-6">
                <h2 className="font-bold text-white">{t('latest_offers')}</h2>
                <div className="flex gap-2 items-center">
                    <Link
                        href="/offers"
                        className="border-2 border-white rounded-full px-5 text-sm text-white"
                    >
                        {t('more')}
                    </Link>
                    <div className="flex gap-1">
                        <button
                            className="flex items-center gap-2 text-small-semi hover:text-slate-500 hover:underline underline-offset-2"
                            onClick={scrollPrev}
                        >
                            {isRtl ? (
                                <ArrowRightCircleIcon className="h-6 w-6 text-white" />
                            ) : (
                                <ArrowLeftCircleIcon className="h-6 w-6 text-white" />
                            )}
                        </button>
                        <button
                            className="flex items-center gap-2 text-small-semi hover:text-slate-500 hover:underline underline-offset-2"
                            onClick={scrollNext}
                        >
                            {isRtl ? (
                                <ArrowLeftCircleIcon className="h-6 w-6 text-white" />
                            ) : (
                                <ArrowRightCircleIcon className="h-6 w-6 text-white" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </Card>
    );
}
