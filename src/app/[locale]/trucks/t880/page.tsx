import { Separator } from "components/ui/separator";
import VehicleBreadCrumb from "../components/breadCrumb";
import VideoHero from "../components/videoHero";
import Image from "next/image";



export default function T880Page() {
    return (
        <div className="flex flex-col">
            <div className="container relative">
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="T880" secondLinkHref="t880" />
            </div>


            <div className="relative">
                {/* <video className="" width="1600" height="600" preload="none" autoPlay loop muted>
                    <source src="/video/t880.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video> */}

                <div className="flex justify-center 2xl:container">
                    <VideoHero videoUrl="/video/t880.mp4" fallbackImageUrl="/t880-carousel.jpg" />

                </div>

                <div className="absolute inset-0 container pt-4 z-30">
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-shadow text-4xl text-white">T800</h1>

                    </div>
                </div>

            </div>

            <div className="container">


                <div className="flex flex-col pt-12 gap-6">
                    <div className="flex gap-4 justify-center">
                        <img
                            className="h-10 w-auto"
                            src="/logos/kenworth_logo.png"
                            alt=""
                        />
                        <Separator orientation='vertical' className='h-12' />
                        <h1>T800</h1>

                    </div>

                    <div className="flex flex-col gap-4 md:text-center">
                        <h2 className="text-xl md:text-2xl font-bold">
                            CONFIGURED FOR ROCK-SOLID PERFORMANCE IN EVERY APPLICATION.
                        </h2>
                        <p>
                            The work you do requires everything you've got and then some.
                            Same for your trucks and the people who drive them. With the T880,
                            you've got a dependable, versatile vehicle capable of performing your toughest jobs.
                            Day in, day out. A truck designed at its core with the strength,
                            stamina and operating economy you need to move your business ahead.
                            Bulk tractor. Tanker. Dump truck. Mixer. Heavy hauler. Refuse truck.
                            Logger. The next time your job requires maximum effort,
                            dispatch the one truck that's equipped to handle it: your Kenworth T880.
                            It's The World's Best® way to get work done.
                        </p>
                    </div>
                </div>
                <Separator className="my-12" />
            </div>

            <div className=" bg-muted/80 py-12">
                <div className="container pb-6">
                    <h2 className="text-xl md:text-2xl font-bold">
                        Kenworth T880 specifications
                    </h2>

                </div>

                <div className="container flex flex-col lg:flex-row gap-8 text-sm md:text-base">
                    <div className="flex flex-col gap-2 bg-">
                        <span className=" underline underline-offset-4">Engine / Powertrain</span>
                        <ul className=" list-inside list-disc">
                            <li>PACCAR MX-13 Engine</li>
                            <li>12.9 Liter</li>
                            <li>405-510 HP</li>
                            <li>1,450 - 1,850 lb-ft of Torque</li>

                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className=" underline underline-offset-4">Exhaust / Aftertreatment</span>
                        <ul className=" list-inside list-disc">
                            <li>RH Under Cab DPF/SCR with Horizontal Tailpipe</li>
                            <li>Small Round DEF Tank - 11 Usable Gallons</li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-2">
                        <span className=" underline underline-offset-4">Transmission</span>
                        <ul className=" list-inside list-disc">
                            <li>PACCAR Automated Transmission 12-Speed</li>
                            <li>Allison Automatic</li>
                        </ul>
                    </div>

                </div>
            </div>

            <div className="container">
                <Separator className="my-12" />
                <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                        <div className="basis-1/3">
                            <Image
                                src={"/tx-18-overhead-h425px.png"}
                                alt=""
                                width={450}
                                height={200}
                                className=""
                            />
                        </div>
                        <div className="flex flex-col gap-2 justify-center basis-2/3">
                            <h2 className="text-xl md:text-2xl font-bold">
                                PACCAR TX-18 Transmission
                            </h2>
                            <p>
                                Introducing the new PACCAR TX-18 series. These purpose-built, high performance,
                                automated transmissions combine the efficiency, lightweight,
                                and sophisticated controls of the TX-12 with the reliability and toughness to conquer heavy duty vocational jobs.
                                The TX-18 and TX-18 Pro have revolutionary features designed to help get the job done.
                            </p>
                        </div>
                    </div>
                </div>
                <Separator className="my-12" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 relative container">
                <div className='relative min-h-52 basis-1/3'>
                    <Image
                        src={"/t880-work-truck-bg.jpg"}
                        alt=""
                        fill={true}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-cover'
                    />
                </div>
                <div className="relative flex flex-col gap-4 basis-2/3">
                    <div className="flex flex-col gap-6">
                        <div className="flex relative z-20">
                            <div className="flex flex-col gap-2 justify-center">
                                <h2 className="text-xl md:text-2xl font-bold">
                                    PERFORMANCE
                                </h2>
                                <p>
                                    Advanced technology and street-smart design — sloped hood, fuel-efficient drivetrain,
                                    aerodynamic and job-specific options, unconventional maneuverability and supremely comfortable driving environment
                                    — make a Kenworth T880 the ideal business partner.
                                </p>
                            </div>
                        </div>

                        <div className="flex relative z-20">
                            <div className="flex flex-col gap-2 justify-center">
                                <h2 className="text-2xl font-bold">
                                    DURABLE AERODYNAMIC SIDE MIRRORS
                                </h2>
                                <p>
                                    Cowl mounted for better stability and located farther forward and lower to optimize rearward visibility.
                                    The convex portion is 37 percent larger than Kenworth's standard convex mirror design
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="container">
                <Separator className="my-12" />

            </div>

            <div className="flex flex-col lg:flex-row gap-6 relative container">

                <div className='relative min-h-52 basis-1/3'>
                    <Image
                        src={"/torque-assisted.png"}
                        alt=""
                        fill={true}
                        sizes='(max-width: 640px) 640px, 1920px'
                        className='object-cover'
                    />
                </div>
                <div className="relative flex flex-col gap-4 basis-2/3">
                    <div className="flex flex-col gap-6">
                        <div className="flex relative z-20">
                            <div className="flex flex-col gap-2 justify-center">
                                <h2 className="text-xl md:text-2xl font-bold">
                                    Torque Assisted Steering
                                </h2>
                                <p>
                                    Torque Assisted Steering is an adaptive steering technology featuring an electric motor control system that works with the hydraulic gear to improve the driving experience.
                                    It adjusts torque based on vehicle speed, easing effort at low speeds while firming at higher speeds to provide a consistent feel.
                                </p>
                                <p>
                                    It can be tailored to the driver’s preference with three levels of assistance controlled by a conveniently positioned dash switch.
                                    This allows the driver to dial in the system so that it works for them.                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}