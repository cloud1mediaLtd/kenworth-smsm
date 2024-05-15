import { Separator } from "components/ui/separator";
import VehicleBreadCrumb from "../components/breadCrumb";
import VideoHero from "../components/videoHero";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import SectionA from "../components/sectionA";

type Props = {
    params: { locale: string };
};

export default async function C550Page({ params: { locale } }: Props) {
    const t = await getTranslations("TrucksPage")
    const isRtl = locale === "ar"

    unstable_setRequestLocale(locale);


    return (
        <div className="flex flex-col">
            <div className="container relative">
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="C500" secondLinkHref="c500" />
            </div>

            <div className="relative">

                <div className="flex justify-center 2xl:container">
                    <VideoHero videoUrl="" fallbackImageUrl="/c500-bodybuilder.jpg" />

                </div>

                <div className="absolute inset-0 container pt-4 z-30">
                    <div className="flex justify-center items-center h-full">
                        <h1 className="text-shadow text-4xl text-white opacity-50">C500</h1>
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
                        <h1>C500</h1>
                    </div>

                    <div className="flex flex-col gap-4 md:text-center">
                        <h2 className="text-xl md:text-2xl font-bold">
                            {t("kentC500.title")}
                        </h2>
                        <p>
                            {t("kentC500.description")}

                        </p>
                    </div>
                </div>

                <Separator className="my-0" />

                <SectionA
                    title={t("kentC500.section.title")}
                    desc={t("kentC500.section.desc")}
                    title2={t("kentC500.section.title2")}
                    desc2={t("kentC500.section.desc2")}
                    image="/FUQ1q6eUsAIViwb.jpeg" />

                <Separator className="my-0" />

            </div>


        </div>
    )
}