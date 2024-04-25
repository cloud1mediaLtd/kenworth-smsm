import { Card } from "components/ui/card";
import { Badge } from "components/ui/badge";
import { CardContent, CardFooter, CardHeader } from "components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowRightCircleIcon } from "lucide-react";
import { Separator } from "components/ui/separator";


export default function FleetOffers() {
    return (
        <>
            <div className="flex justify-between items-center pb-4">
                <h1 className='font-bold'>Business center</h1>
                {/* <div className="flex gap-2 items-center">

                    <Link href="/business"
                        className='border-2 border-black rounded-full px-3 text-sm'>
                        More
                    </Link>
                    <div className="flex gap-1">

                        <button
                            className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2">
                            <ArrowLeftCircleIcon className='h-6 w-6 text-black' />
                        </button>
                        <button
                            className="flex items-center gap-2 text-small-semi  hover:text-slate-500 hover:underline underline-offset-2">
                            <ArrowRightCircleIcon className='h-6 w-6 text-black' />
                        </button>

                    </div>
                </div> */}

            </div>
            <Card className='flex flex-col md:flex-row overflow-hidden bg-slate-700'>

                <div className='relative w-full min-h-52 basis-5/8'>
                    <Image
                        src="/fiatrange.jpg"
                        alt=""
                        fill={true}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='flex flex-col basis-3/8'>

                    <CardHeader>
                        <Badge className='flex justify-center bg-black'>
                            Fleet | Mega Discounts
                        </Badge>

                        <div className="flex relative items-center justify-center gap-3 pt-3" >
                            <Image
                                src='/logos/Fiat_professional_logo_white.png'
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

                        <Separator className="my-0 opacity-15" />

                        <h2 className='text-white pb-2'>
                            Professional Range
                        </h2>
                        <p className="text-md font-semibold text-center text-white hidden md:block">
                            Complete end-to-end commercial fleet solutions
                        </p>

                        <Separator className="mt-4 opacity-15 hidden md:block" />

                    </CardContent>

                    <CardFooter className="flex justify-between">

                        <Card className='flex items-center gap-4 bg-black'>

                            <div className='flex  justify-center items-center gap-3 px-2 py-1'>

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
                            <ArrowRightCircleIcon className='h-8 w-8 text-white' />
                        </Link>

                    </CardFooter>
                </div>

            </Card>
        </>

    );
}