import { Separator } from "components/ui/separator";
import VehicleBreadCrumb from "../components/breadCrumb";
import VideoHero from "../components/videoHero";
import SectionA from "../components/sectionA";
import { getTranslations } from "next-intl/server";


export default async function NineSixThreePage() {
    const t = await getTranslations("TrucksPage")

    return (
        <div className="flex flex-col">
            <div className="container relative">
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="963" secondLinkHref="963" />
            </div>

            <div className="relative">

                <div className="flex justify-center 2xl:container">
                    <VideoHero videoUrl="" fallbackImageUrl="/963.jpeg" />
                </div>

                <div className="absolute inset-0 container pt-4 z-30">
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-shadow text-4xl text-white">963</h1>

                    </div>
                </div>

            </div>

            <div className="container flex flex-col gap-12">

                <div className="flex flex-col pt-12 gap-6">
                    <div className="flex gap-4 justify-center">
                        <img
                            className="h-10 w-auto"
                            src="/logos/kenworth_logo.png"
                            alt=""
                        />
                        <Separator orientation='vertical' className='h-12' />
                        <h1>963</h1>
                    </div>

                    <div className="flex flex-col gap-4 md:text-center">
                        <h2 className="text-xl md:text-2xl font-bold">
                            {t("kent963.title")}
                        </h2>
                        <p>
                            {t("kent963.description")}

                        </p>
                    </div>
                </div>

                <Separator className="my-0" />

                <SectionA
                    title={t("kent963.section.title")}
                    desc={t("kent963.section.desc")}
                    title2={t("kent963.section.title2")}
                    desc2={t("kent963.section.desc2")}
                    image="/963.jpeg" />

                <Separator className="my-0" />

            </div>

        </div>
    )
}