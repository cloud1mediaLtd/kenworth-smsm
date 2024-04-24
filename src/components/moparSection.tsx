import { UserCog2, HeartPulse, ListTodo, CalendarCheck, ArrowRightCircleIcon, SearchCheckIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "./ui/button";


export default function MoparSection() {
    return (
        <>

            <div className='flex flex-col bg-[#0245B2] py-6 text-slate-50 relative'>
                <div className='content-container-no-bg flex flex-col lg:flex-row items-center gap-6 justify-center'>

                    <div className="relative text-center lg:text-start max-w-2xl">
                        <h1 className="text-2xl md:text-2xl xl:text-3xl text-balance pb-2">Here When You Need Us</h1>
                        <p>
                            Access genuine parts for your vehicles. Whether you're in need of replacement parts or looking to enhance your vehicle's performance, we've got you covered.
                        </p>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
                        <div className="flex gap-8 items-center justify-center">
                            <Card className="flex flex-col justify-center items-center w-32 h-44 p-3 relative">
                                <div className="relative w-32 h-32 m-3">
                                    <Image
                                        src='/logos/Mopar_logo.svg'
                                        alt='Mopar'
                                        fill={true}
                                        sizes='(max-width: 640px) 640px, 1920px'
                                        className='object-fill'
                                    />
                                </div>

                                <div>
                                    Genuine Parts
                                </div>
                            </Card>
                            <div>

                                <div className="flex relative items-center gap-4">
                                    <div className="flex flex-col">
                                        <div className='flex h-12 w-12 rounded-full bg-red-600 items-center justify-center z-40 shadow-circle'>
                                            <UserCog2 className="text-white h-6 w-6 " />
                                        </div>
                                        <div className='flex h-12 w-12 rounded-full bg-orange-500 items-center justify-center z-30 -mt-1 shadow-circle'>
                                            <HeartPulse className="text-white h-6 w-6" />
                                        </div>
                                        <div className='flex h-12 w-12 rounded-full bg-green-500 items-center justify-center z-20 -mt-1 shadow-circle'>
                                            <ListTodo className="text-white h-6 w-6" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1.5 min-w-32 relative font-semibold text-large-semi md:text-xlarge-semi">
                                        <span className=''>
                                            Schedule
                                        </span>
                                        <Separator orientation='horizontal' className='my-1 w-4' />
                                        <span className=''>
                                            Health Report
                                        </span>
                                        <Separator orientation='horizontal' className='my-1 w-4' />
                                        <span className=''>
                                            Service
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex flex-col lg:flex-row gap-6 min-w-60">
                            <Separator className="my-4 opacity-35 lg:hidden" />

                            <Separator orientation='vertical' className="h-36 opacity-85 hidden lg:flex" />

                            <div className="flex grow lg:flex-col items-center justify-center gap-4">
                                <div className='text-black flex gap-2 items-center'>
                                    <Link
                                        href={"/parts"}
                                        className="flex items-center gap-2 text-white hover:underline underline-offset-2"
                                    >
                                        <SearchCheckIcon className="w-4 " />
                                        search Parts Shop
                                    </Link>
                                </div>

                                <Separator orientation='vertical' className='h-6 rounded-sm bg-white lg:hidden' />
                                <Separator orientation='horizontal' className='w-16 opacity-10 rounded-sm bg-white my-3 hidden lg:flex' />


                                <Button className='bg-white text-[#0245B2] hover:outline hover:text-white gap-2'>
                                    <Link
                                        href={"/parts"}
                                        className="flex items-center gap-2"
                                    >
                                        Book Service

                                        <ArrowRightCircleIcon className=' w-5 text-[#0245B2] hover:text-white' />
                                    </Link>

                                </Button>

                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </>
    )
}