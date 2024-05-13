import { Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function ServiceSection() {
    const t = await getTranslations('ServicePage');
    return (
        <>
            <div className='flex flex-col bg-kenbg py-6 text-slate-50 relative'>
                <div className='content-container-no-bg flex flex-col lg:flex-row items-center gap-6 justify-center'>
                    <div className=" flex flex-col items-center justify-center gap-6 relative text-center lg:text-start max-w-2xl">
                        <h1 className="text-2xl md:text-2xl xl:text-3xl text-balance">{t('service_section.message')}</h1>
                        <p className="text-center">
                            {t('service_section.description')}
                        </p>
                        <span dir="ltr" className="flex items-center gap-3"><Phone />+218 44 567 567</span>
                    </div>
                </div>
            </div>
        </>
    )
}