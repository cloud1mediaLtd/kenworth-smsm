import { Card } from "components/ui/card";
import { Badge } from "components/ui/badge";
import { CardContent, CardFooter, CardHeader } from "components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import { Separator } from "components/ui/separator";


export default function FleetOffers() {
    return (
        <>
            <div className="flex justify-between items-center pb-4">
                <h1 className='font-bold'>Business center</h1>
                <div className="flex gap-2 items-center">

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
                </div>

            </div>
            <Card className='flex flex-col md:flex-row overflow-hidden bg-slate-700 h-[500px] max-h-[500px]'>

                <div className='relative min-h-52 md:h-full md:w-72 lg:w-full basis-2/3'>
                    <Image
                        src="/fiatrange.jpg"
                        alt=""
                        fill={true}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-cover w-full h-full'
                    />
                </div>

                <div className='flex flex-col grow'>

                    <CardHeader>
                        <Badge className='flex justify-center from-black bg-gradient-to-r to-[#4d090e]'>
                            Fleet | Mega Discounts
                        </Badge>

                        <div className="flex relative items-center justify-center gap-3" >
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

                        <Separator className="mt-4 opacity-15" />

                    </CardContent>

                    <CardFooter>

                        <div className='flex w-full justify-end items-center gap-4'>
                            <Link href={"/business"} className=' font-semibold text-sm text-slate-100'>
                                Visit Business Center
                            </Link>

                            <Separator orientation='vertical' className='h-4' />

                            <Link href="/vehicles/model/16">
                                <ArrowRightCircleIcon className='h-12 text-slate-100' />
                            </Link>
                        </div>
                    </CardFooter>
                </div>

            </Card>
        </>

    );
}