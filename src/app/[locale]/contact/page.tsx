import PageLayout from "components/PageLayout";
import { Separator } from "components/ui/separator";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Link from "next/link";

type Props = {
    params: { locale: string };
};

export default function partsPage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    const t = useTranslations('ContactPage');
    const isRtl = locale === "ar"


    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>

                <div className="flex flex-col pt-12">

                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <MapPinIcon className='h-5 w-5' />

                            <p className="text-sm font-semibold">
                                {isRtl ? (<span>٧ كم - طريق السواني,</span>) : (<span>7km - Al-Swany Road,</span>)}
                            </p>
                            <span className="text-sm font-semibold">
                                {isRtl ? (<span>طرابلس - السواني</span>) : (<span>Al-Swany - Tripoli</span>)}
                            </span>

                        </div>
                        <Separator className="" />

                        <Link href="/contact" className="">
                            <span className="underline-offset-4 hover:underline text-sm font-semibold flex gap-3">
                                <PhoneIcon className='h-5 w-5' />
                                <span dir="ltr">
                                    +218 91 000 0000

                                </span>
                            </span>
                        </Link>
                        <Separator className=" " />

                        <Link href="/contact" className="">
                            <span className="underline-offset-4 hover:underline text-sm font-semibold flex gap-3">
                                <MailIcon className='h-5 w-5' /> info@gasoslibya.ly
                            </span>
                        </Link>

                    </div>

                </div>
            </PageLayout>


        </ section>
    );
}