import { Separator } from "components/ui/separator";
import VehicleBreadCrumb from "../components/breadCrumb";
import VideoHero from "../components/videoHero";

export default function T880Page() {
    return (
        <div className="flex flex-col">
            <div className="container relative">
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="T880" secondLinkHref="/trucks/t880" />
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
                        <h1 className="text-shadow text-4xl">T800</h1>

                    </div>
                </div>

            </div>

            <div className="flex flex-col container pt-12 gap-6">
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
                    <h2>
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

        </div>
    )
}