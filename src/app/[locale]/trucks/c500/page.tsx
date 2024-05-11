import { Separator } from "components/ui/separator";
import VehicleBreadCrumb from "../components/breadCrumb";
import VideoHero from "../components/videoHero";
import Image from "next/image";



export default function C550Page() {
    return (
        <div className="flex flex-col">
            <div className="container relative">
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="C500" secondLinkHref="c500" />
            </div>


            <div className="relative">
                {/* <video className="" width="1600" height="600" preload="none" autoPlay loop muted>
                    <source src="/video/t880.mp4" type="video/mp4" />

                    Your browser does not support the video tag.
                </video> */}

                <div className="flex justify-center 2xl:container">
                    <VideoHero videoUrl="" fallbackImageUrl="/c500-bodybuilder.jpg" />

                </div>

                <div className="absolute inset-0 container pt-4 z-30">
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-shadow text-4xl text-white">C500</h1>

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
                        <h1>C500</h1>

                    </div>

                    <div className="flex flex-col gap-4 md:text-center">
                        <h2 className="text-xl md:text-2xl font-bold">
                            TACKLING THE TOUGHEST OFF-ROAD APPLICATIONS.
                        </h2>
                        <p>
                            The work you do demands exceptional strength and resilience.
                            The same goes for your trucks and the drivers behind the wheel.
                            With the C500, you have a robust and versatile vehicle engineered to tackle the most demanding jobs.
                            Day after day. Built with unmatched durability, endurance, and operational efficiency,
                            the C500 is designed to propel your business forward. Whether you're hauling heavy loads,
                            operating in off-road conditions, or handling specialized applications like logging or mining,
                            the Kenworth C500 is the truck equipped to meet your highest expectations. For the next challenging task,
                            rely on the one truck that's ready for anything: your Kenworth C500.
                            It's The World's Best® for getting the toughest work done.
                        </p>
                    </div>
                </div>
                <Separator className="my-12" />
            </div>


            <div className="flex flex-col lg:flex-row gap-6 relative container">
                <div className='relative min-h-64 basis-1/3'>
                    <Image
                        src={"/FUQ1q6eUsAIViwb.jpeg"}
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
                                    The C500 offers a choice of two hoods, made from fiberglass or sheet metal,
                                    and can accommodate a 1780 square-inch cooling module. This feature enables enhanced cooling capacity,
                                    resulting in an increase in stationary horsepower capability up to 600 hp and Gross Combination Weights
                                    up to 200,000lbs without requiring application approval.
                                </p>
                            </div>
                        </div>

                        <div className="flex relative z-20">
                            <div className="flex flex-col gap-2 justify-center">
                                <h2 className="text-2xl font-bold">
                                    TOUGHNESS
                                </h2>
                                <p>
                                    Renowned for its ability to tackle any job with ease, the C500 features a high-mounted engine that is easily accessible.
                                    You can choose between the award-winning Cummins or PACCAR engines, which when combined with the C500's robust frame,
                                    provides ample horsepower to handle even the most challenging tasks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}