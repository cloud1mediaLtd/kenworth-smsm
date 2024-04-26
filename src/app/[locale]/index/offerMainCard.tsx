import { ArrowRightCircleIcon } from "lucide-react";
import { Badge } from "components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function OfferMainCard({ offer }) {
    return (
        <>
            <Card className={`flex flex-col md:flex-row overflow-hidden ${offer.bg}`}>

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

                        <div className='flex justify-center text-2xl font-bold text-slate-50 items-center gap-3 pt-3'>
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
                            <Separator className="my-0 opacity-15" />

                            <h2 className='text-slate-50 text-base lg:text-lg text-center'>
                                {offer.model.description}
                            </h2>

                            <Separator className="mt-4 opacity-15 hidden md:block" />
                            <p className="text-sm font-semibold text-center text-white hidden md:block">
                                Whether you're in need of replacement parts or looking to enhance your vehicle's performance.

                            </p>

                        </div>
                        <Separator className="mt-4 opacity-15 hidden md:block" />

                    </CardContent>

                    <CardFooter className="flex justify-between">

                        <Card className='flex items-center gap-4 bg-slate-100'>

                            <div className='flex  justify-center items-center gap-3 px-2 py-1'>

                                <Image
                                    src='/logos/Mopar_logo.svg'
                                    alt='Mopar'
                                    width={80}
                                    height={80}
                                    className="h-8 w-8"
                                />
                                <div className='flex flex-row md:flex-col leading-3 gap-1'>
                                    <span className='text-sm font-semibold leading-none text-black'>
                                        Warranty
                                    </span>
                                </div>

                            </div>
                        </Card>

                        <Link href={`${offer.link}`}>
                            <ArrowRightCircleIcon className='h-8 w-8 text-white' />
                        </Link>

                    </CardFooter>
                </div>

            </Card>
        </>
    )
}