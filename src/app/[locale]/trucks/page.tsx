import { Button } from "components/ui/button";
import { useLocale } from "next-intl";
import { offers } from "../../../../data/offers";
import { Card, CardContent, CardFooter, CardHeader } from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";
import { Badge } from "components/ui/badge";
import Image from "next/image";
import { cn } from "lib/utils";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";


export default function VehiclePage() {
    // const t = useTranslations('TrucksPage');
    const isRtl = useLocale() === 'ar';

    return (
        <section className='pt-12 container'>

            {/* <div className="flex flex-col md:flex-row gap-10 items-center pb-12 pt-6">
                <h1 className=''>
                    {t('title')}
                </h1>

                <Separator
                    orientation='vertical'
                    className='h-16 md:block hidden'
                />
                <div className="flex flex-col gap-5">
                    {t.rich('description', {
                        p: (chunks) =>
                            <p className="">{chunks}</p>,
                    })}
                </div>

            </div> */}

            <div className="flex flex-col gap-6">

                {offers.map((offer) => (

                    <Card className={cn(`${offer.bg} flex flex-col md:flex-row overflow-hidden`)}>

                        <div className='relative w-full min-h-52 basis-7/12'>
                            <Image
                                src={offer.model.image}
                                alt={offer.model.name}
                                fill={true}
                                sizes='(max-width: 640px) 640px, 1920px'
                                className='object-cover'
                            />
                        </div>

                        <div className='flex flex-col basis-5/12'>

                            <CardHeader className="flex justify-center gap-3">
                                <Badge className={`flex justify-center ${offer.badgeClass}`}>
                                    {isRtl ? (<span>{offer.badge_ar}</span>) : (<span>{offer.badge}</span>)}
                                </Badge>

                                <div className='flex justify-center text-2xl font-bold text-primary items-center gap-3 pt-3'>
                                    <Image
                                        src={offer.brand.logo}
                                        alt={`${offer.brand.name} logo`}
                                        width={offer.brand.logoWidth}
                                        height={offer.brand.logoHeight}
                                        className="h-12 object-contain"
                                    />
                                    <Separator orientation='vertical' className='h-6' />
                                    <div >
                                        <h2 className="text-xl lg:text-2xl font-semibold">
                                            {offer.model.name}
                                        </h2>
                                    </div>

                                </div>
                            </CardHeader>

                            <CardContent className='h-full flex flex-col gap-3 items-center'>
                                <div className="flex flex-col gap-3 items-center justify-center">
                                    <Separator className="my-0  opacity-50" />

                                    <h2 className=' text-sm font-semibold lg:text-base text-center'>
                                        {isRtl ? (<span>{offer.model.description_ar}</span>) : (<span>{offer.model.description}</span>)}
                                    </h2>



                                </div>
                                <Separator className=" hidden md:block" />

                            </CardContent>

                            <CardFooter className="flex justify-between gap-2">

                                <Card className='flex items-center justify-center gap-2 px-2  h-10 w-full'>
                                    <Link href="/warranty">
                                        <div className='flex justify-center'>
                                            <span className='text-xs font-semibold '>
                                                {isRtl ? (
                                                    <span className='text-xs font-semibold'>ضمان لمدة 5 سنوات أو 500,000 كم</span>
                                                ) : (
                                                    <span className='text-xs font-semibold'>5 years or 500,000 km warranty</span>
                                                )}
                                            </span>
                                        </div>
                                    </Link>

                                </Card>



                                <Link href={`${offer.link}`}>
                                    <span className='flex items-center'>
                                        {isRtl ? (
                                            <span className='text-sm font-semibold'><ArrowLeftCircle className="h-8 w-8 text-kenbg" /></span>
                                        ) : (
                                            <span className='text-sm font-semibold'><ArrowRightCircle className="h-8 w-8 text-kenbg" /></span>
                                        )}
                                    </span>
                                </Link>

                            </CardFooter>
                        </div>

                    </Card>
                ))}


            </div>


            {/* <Separator
                orientation='horizontal'
                className='my-6'
            /> */}

            {/* <Suspense fallback={<>loading...</>}>
                <Brands locale={locale} />
            </Suspense> */}

        </ section>
    );
}