import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "./ui/button";
import Link from "next/link";
import { Separator } from "./ui/separator";

export default async function ServiceSection() {
    const t = await getTranslations('Service_Parts_Page');
    return (
        <>
            <div className='flex flex-col bg-kenbg py-6 text-slate-50 relative'>
                <div className='content-container-no-bg flex flex-col lg:flex-row items-center gap-6 justify-center'>
                    <div className=" flex flex-col items-center justify-center gap-6 relative text-center lg:text-start max-w-2xl">
                        <h1 className="text-2xl md:text-2xl xl:text-3xl text-balance">{t('service_section.message')}</h1>
                        <p className="text-center text-balance text-lg font-semibold">
                            {t('service_section.description')}
                        </p>
                        <div className="flex gap-6 items-center">
                            <span dir="ltr" className="flex items-center gap-3"><Phone />
                                +(210) 92 000 3049</span>
                            <Separator orientation="vertical" className="h-4" />
                            <Button asChild>
                                <Link href={"/service"}>
                                    {t("title")}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}