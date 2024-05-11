import Brands from "app/[locale]/trucks/components/brands";
import { Button } from "components/ui/button";
import { XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";
import { offers } from "../../../../data/offers";
import { Card, CardContent, CardFooter, CardHeader } from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";
import { Badge } from "components/ui/badge";
import Image from "next/image";
import { cn } from "lib/utils";


export default function VehiclePage() {
    const t = useTranslations('VehiclesPage');
    const locale = useLocale();

    return (
        <section className='pt-12'>

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

            <div className=" gap-3 items-center hidden">

                <span className=" text-sm font-semibold">
                    Recommendations:
                </span>

                <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm" className="mr-3">
                        Staff Pick
                    </Button>
                    <Button size="sm" className="mr-3">
                        Economical
                    </Button>
                    <Button size="sm" className="mr-3">
                        Family
                    </Button>
                    <Button size="sm" className="mr-3">
                        Excutive
                    </Button>
                    <Button size="sm" className="mr-3">
                        Luxury
                    </Button>
                    <Button size="sm" className="mr-3">
                        SUV
                    </Button>
                    <Button size="sm" className="mr-3">
                        Work
                    </Button>

                    <Button size="sm" className="">
                        Taxi
                    </Button>
                    <span>
                        <XIcon className="w-4 h-4" />
                    </span>

                </div>

            </div>
            <div className="flex flex-col gap-4">

                {offers.map((offer) => (

                    <Card className={cn(`${offer.bg} flex flex-col md:flex-row overflow-hidden h-full`)}>

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
                                    {offer.badge}
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
                                        {offer.model.description}
                                    </h2>



                                </div>
                                <Separator className=" hidden md:block" />

                            </CardContent>

                            <CardFooter className="flex justify-between gap-2">

                                <Link href="/warranty">
                                    <Card className='flex items-center gap-2 px-2 py-1 h-10'>

                                        <div className='flex flex-row md:flex-col leading-3 gap-1'>
                                            <span className='text-xs font-semibold md:leading-none leading-tight'>
                                                5 years or 500,000 km warranty
                                            </span>
                                        </div>
                                    </Card>
                                </Link>

                                <Link href={`${offer.link}`}>
                                    <Button className='flex items-center gap-2 h-10'>
                                        <span>
                                            View
                                        </span>
                                    </Button>
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