import { Badge } from "components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "components/ui/card";
import { Separator } from "components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { Button } from "components/ui/button";
import { cn } from "lib/utils";

export default function OfferMainCard({ offer }) {
    return (
        <>
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
        </>
    )
}