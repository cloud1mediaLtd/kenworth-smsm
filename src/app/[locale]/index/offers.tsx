import { Badge } from "components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "components/ui/card";
import { Separator } from "components/ui/separator";
import { ArrowRightCircleIcon } from "lucide-react";
import Image from 'next/image';
import Link from "next/link";


export default function Offers() {
    return (
        <div className='flex flex-col w-full'>

            <div className='grid grid-cols-2 gap-8'>
                <Card className='flex flex-col md:flex-row overflow-hidden md:h-80 col-span-2 bg-black'>

                    <div className='relative min-h-52 md:h-full md:w-72 lg:w-full basis-1/2'>
                        <Image
                            src="/jeep-grand-cherokee-4xe-overview-canvas-2-1920X922.jpg"
                            alt=""
                            fill={true}
                            sizes='(max-width: 640px) 640px, 1920px'
                            className='object-cover w-full h-full'
                        />
                    </div>

                    <div className='flex flex-col grow'>

                        <CardHeader>
                            <Badge className='flex justify-center from-[#9C101A] bg-gradient-to-r to-[#340407]'>New 2025 | Early Bird Offers</Badge>
                            <div className='flex justify-center text-2xl font-bold text-slate-50 items-center gap-3 pt-3'>
                                <Image
                                    src='/logos/jeep_logo.svg'
                                    alt='Mopar'
                                    width={100}
                                    height={100}
                                    className="h-10 object-contain"
                                />
                                <Separator orientation='vertical' className='h-6' />
                                <div >
                                    <h2 className="text-2xl font-semibold">
                                        Grand Cheroke
                                    </h2>
                                </div>

                            </div>
                        </CardHeader>

                        <CardContent className='h-full flex flex-col gap-3 justify-center items-center'>
                            <h2 className='text-slate-50 '>Setting The Bar For Adventure</h2>

                            <Separator className="my-0 opacity-35" />


                            <div className='w-full flex items-center h-auto'>
                                <div className='flex  justify-center items-center gap-3 px-3 py-1 basis-1/2'>

                                    <Image
                                        src='/logos/Mopar_logo_black.png'
                                        alt='Mopar'
                                        width={80}
                                        height={80}
                                        className="h-10 w-10"
                                    />
                                    <div className='flex flex-row md:flex-col leading-3 gap-1'>
                                        <span className='text-sm font-semibold leading-none text-slate-50'>
                                            Warranty
                                        </span>
                                    </div>

                                </div>

                                <Separator orientation='vertical' className='h-4 bg-slate-400' />


                                <div className='flex  justify-center items-center gap-3 px-3 py-1 basis-1/2'>

                                    <Image
                                        src='/logos/bankLogo.png'
                                        alt='Mopar'
                                        width={50}
                                        height={50}
                                        className=" h-10 w-10"
                                    />
                                    <div className='flex flex-col leading-3'>
                                        <span className='text-sm font-semibold leading-none text-slate-50'>
                                            Finance
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-0 opacity-35" />

                            <div className='flex w-full justify-end items-center gap-4'>
                                <Link href={"/vehicles/3"} className=' font-semibold text-sm text-slate-200'>
                                    view Jeep Line up
                                </Link>

                                <Separator orientation='vertical' className='h-4' />

                                <Link href="/vehicles/model/16">
                                    <ArrowRightCircleIcon className='h-12 text-white' />
                                </Link>
                            </div>

                        </CardContent>

                    </div>

                </Card>

                <Card className='flex flex-col overflow-hidden bg-white col-span-2 md:col-span-1'>

                    <div className='relative min-h-56'>
                        <Image
                            src="/300.png"
                            alt=""
                            fill={true}
                            sizes='(max-width: 640px) 640px, 1920px'
                            className='object-cover w-full h-full'
                        />
                    </div>

                    <div className='flex flex-col grow'>

                        <CardHeader className='h-32'>
                            <Badge className='flex justify-center from-[#0245B2] bg-gradient-to-r to-[#0356db]'>
                                New | Now In Showroom
                            </Badge>
                            <div className="flex relative items-center justify-center gap-3 pt-3" >
                                <Image
                                    src='/logos/chryslerlogo.png'
                                    alt='Mopar'
                                    width={170}
                                    height={80}
                                    className="h-10 object-contain"
                                />
                                <Separator orientation='vertical' className='h-4' />
                                <h2 className='text-center font-bold text-2xl'>
                                    300
                                </h2>
                            </div>

                        </CardHeader>

                        <CardContent className='h-full flex flex-col gap-3 items-center'>

                            <Separator className="my-0 opacity-85" />

                            <h2 className='text-slate-700 pb-2'>
                                High-performance And Personal Luxury
                            </h2>

                            <Separator className="my-0 opacity-85" />


                            <div className='w-full flex items-center h-auto'>
                                <div className='flex  justify-center items-center gap-3 px-3 py-1 basis-1/2'>

                                    <Image
                                        src='/logos/Mopar_logo.svg'
                                        alt='Mopar'
                                        width={80}
                                        height={80}
                                        className="h-10 w-10"
                                    />
                                    <div className='flex flex-row md:flex-col leading-3 gap-1'>
                                        <span className='text-sm font-semibold leading-none text-slate-950'>
                                            Warranty
                                        </span>
                                    </div>

                                </div>

                                <Separator orientation='vertical' className='h-4 bg-slate-400' />


                                <div className='flex  justify-center items-center gap-3 px-3 py-1 basis-1/2'>

                                    <Image
                                        src='/logos/bankLogo.png'
                                        alt='Mopar'
                                        width={50}
                                        height={50}
                                        className=" h-10 w-10"
                                    />
                                    <div className='flex flex-col leading-3'>
                                        <span className='text-sm font-semibold leading-none text-slate-950'>
                                            Finance
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <Separator className="my-0 opacity-85" />

                        </CardContent>

                        <CardFooter>

                            <div className='flex w-full justify-end items-center gap-4'>
                                <Link href={"/vehicles/5"} className=' font-semibold text-sm text-slate-600'>
                                    View Chrysler Line up
                                </Link>

                                <Separator orientation='vertical' className='h-4' />

                                <Link href="/vehicles/model/16">
                                    <ArrowRightCircleIcon className='h-12 text-slate-600' />
                                </Link>
                            </div>
                        </CardFooter>

                    </div>

                </Card>

                <Card className='flex flex-col overflow-hidden bg-[#9C101A] col-span-2 md:col-span-1'>

                    <div className='relative min-h-56'>
                        <Image
                            src="/fiatrange.jpg"
                            alt=""
                            fill={true}
                            sizes='(max-width: 640px) 640px, 1920px'
                            className='object-cover w-full h-full'
                        />
                    </div>

                    <div className='flex flex-col grow'>

                        <CardHeader className='h-32'>
                            <Badge className='flex justify-center from-black bg-gradient-to-r to-[#4d090e]'>
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

                            <Separator className="my-0 opacity-85" />

                            <h2 className='text-white pb-2'>
                                Professional Range
                            </h2>
                            <p className="text-md font-semibold text-center text-white">
                                Complete end-to-end commercial fleet solutions
                            </p>

                            {/* <Separator className="my-0 opacity-85" /> */}

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


            </div>
            <div className="flex items-center justify-center gap-4 pt-10">
                <Link
                    href={"/vehicles"}
                    className="flex items-center gap-2 text-black underline underline-offset-2 hover:no-underline"
                >
                    All Vehicles

                </Link>

            </div>


            <Separator className="my-12" />

            {/* 
        <div className='flex flex-col lg:flex-row gap-8'>

          <Card className='overflow-hidden items-center hover:bg-[#0245B2]/90 bg-[#0245B2] md:basis-3/5'>
            <Link href="/parts" className='h-24 flex items-center'>
              <div className='relative h-full w-[300px] max-w-[250px]'>

                <Image
                  src='/moparService.jpeg'
                  alt='Mopar'
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />

              </div>
              <div className='p-4 grow flex flex-col gap-3 text-white font-semibold'>
                <h3 className=''>Free Oil & Filter change*</h3>

              </div>
            </Link>
          </Card>

          <Card className='overflow-hidden items-center hover:bg-slate-50 md:basis-2/5'>
            <Link href="/parts" className='h-24 flex'>
              <div className='relative h-full w-[300px] max-w-[250px]'>
                <Image
                  src='/WINCH_GUARD_LIGHT_MOUNTING BRACKETS.jpg'
                  alt='Mopar'
                  fill={true}
                  sizes='(max-width: 640px) 640px, 1920px'
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className='p-4 grow flex gap-3 items-center'>
                <h3>New Jeep Wrangler Accessories</h3>

              </div>
            </Link>

          </Card>

        </div> */}

        </div>
    );
}