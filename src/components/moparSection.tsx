import { UserCog2, HeartPulse, ListTodo, CalendarCheck, ArrowRightCircleIcon, SearchCheckIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from 'next/image';
import Link from "next/link";
import { Button } from "./ui/button";


export default function MoparSection() {
    return (
        <>

            <div className='flex flex-col bg-[#0245B2] py-8 text-slate-50 text-center relative'>
                <div className='content-container-no-bg'>
                    {/* <Image
                        src='/Mopar_logo.svg'
                        alt='Mopar'
                        fill={true}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-fill opacity-15 py-4'
                    /> */}

                    <div className="relative">
                        <h1 className="text-2xl md:text-3xl">Here When You Need Us</h1>
                    </div>


                    <div className="flex justify-center pt-6 relative">
                        <div className="flex">
                            <div className='flex h-24 w-24  rounded-full bg-white items-center justify-center z-40 shadow-circle'>
                                <UserCog2 className="text-[#0245B2] h-10 w-10 " />
                            </div>
                            <div className='flex h-24 w-24 rounded-full bg-white items-center justify-center z-30 -ml-3 shadow-circle'>
                                <HeartPulse className="text-[#0245B2] h-10 w-10" />
                            </div>
                            <div className='flex h-24 w-24 rounded-full bg-white items-center justify-center z-20 -ml-3 shadow-circle'>
                                <ListTodo className="text-[#0245B2] h-10 w-10" />
                            </div>
                            <div className='flex h-24 w-24 rounded-full bg-white items-center justify-center z-10 -ml-3 shadow-circle'>
                                <CalendarCheck className="text-[#0245B2] h-10 w-10" />
                            </div>

                        </div>
                    </div>

                    <div className="flex gap-5 md:gap-8 justify-center pt-6 items-center relative font-semibold text-base-semi md:text-xlarge-semi">
                        <span className=''>
                            Service
                        </span>
                        <Separator orientation='vertical' className='h-4' />
                        <span className=''>
                            Health Report
                        </span>
                        <Separator orientation='vertical' className='h-4' />
                        <span className=''>
                            Recalls
                        </span>
                        <Separator orientation='vertical' className='h-4' />
                        <span className=''>
                            Schedule
                        </span>
                    </div>

                    <Separator className="my-8  opacity-35" />

                    <div className="flex items-center justify-center gap-4">
                        <div className='text-black flex gap-2 items-center'>
                            <Link
                                href={"/parts"}
                                className="flex items-center gap-2 text-white hover:underline underline-offset-2"
                            >
                                <SearchCheckIcon className="w-4 " />
                                search Parts Shop
                            </Link>
                        </div>

                        <Separator orientation='vertical' className='h-6 rounded-sm bg-white' />

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

        </>
    )
}