import { UserCog2, HeartPulse, ListTodo, CalendarCheck, ArrowRightCircleIcon } from "lucide-react";
import { Card } from "./ui/card";
import { Separator } from "./ui/separator";
import Image from 'next/image';
import Link from "next/link";


export default function MoparSection() {
    return (
        <>

            <div className='flex flex-col bg-[#0245B2] py-6 text-slate-50 text-center'>
                <div className='content-container-no-bg'>

                    <h1>Here When You Need Us</h1>
                    <p className='text-base-semi'>
                        Have a question or need some help? We're here for you day and night.
                        Explore the site or contact us by email, chat or phone.
                    </p>

                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6'>
                        <div className='flex flex-col text-center items-center gap-6 p-2' >
                            <div className='flex h-20 w-20 rounded-full bg-white items-center justify-center'>
                                <span className='text-[#0245B2]'>
                                    <UserCog2 size={40} />
                                </span>

                            </div>
                            <span className='text-large-semi'>
                                Service
                            </span>
                        </div>

                        <div className='flex flex-col text-center items-center gap-6 p-2' >
                            <div className='flex h-20 w-20 rounded-full bg-white items-center justify-center'>
                                <span className='text-[#0245B2]'>
                                    <HeartPulse size={40} />
                                </span>

                            </div>
                            <span className='text-large-semi'>
                                Health Report
                            </span>
                        </div>

                        <div className='flex flex-col text-center  items-center gap-6 p-2' >
                            <div className='flex h-20 w-20 rounded-full bg-white items-center justify-center'>
                                <span className='text-[#0245B2]'>
                                    <ListTodo size={40} />
                                </span>

                            </div>
                            <span className='text-large-semi'>
                                Recalls
                            </span>
                        </div>

                        <div className='flex flex-col text-center items-center gap-6 p-2' >
                            <div className='flex h-20 w-20 rounded-full bg-white items-center justify-center'>
                                <span className='text-[#0245B2]'>
                                    <CalendarCheck size={40} />
                                </span>

                            </div>
                            <span className='text-large-semi'>
                                Schedule
                            </span>
                        </div>
                    </div>

                    <Link href="/parts" className=''>
                        <Card className='flex  col-span-1 md:flex-row justify-center overflow-hidden items-center text-white relative p-8 hover:shadow-lg mt-8' >
                            <Image
                                src='/Mopar_logo.svg'
                                alt='Mopar'
                                fill={true}
                                sizes='(max-width: 640px) 640px, 1920px'
                                className='object-fill opacity-15 py-4'
                            />
                            <div className='p-4 inset-0 z-20 text-black flex gap-2 items-center'>
                                <h2 className='text-2xl'>Book Service</h2>

                                <ArrowRightCircleIcon className='h-12' />

                            </div>

                            <Separator orientation='vertical' className='h-8 bg-black w-0.5 rounded-sm' />

                            <div className='p-4 inset-0 z-20 text-black flex gap-2 items-center'>
                                <h2 className='text-2xl'>Search Parts Shop</h2>
                                <ArrowRightCircleIcon className='h-12' />

                            </div>
                        </Card>
                    </Link>

                </div>

            </div>

        </>
    )
}