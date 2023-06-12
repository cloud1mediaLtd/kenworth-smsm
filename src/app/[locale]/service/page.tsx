"use client";
import PageLayout from "components/PageLayout";
import PartsFinder from "components/partsFinder/partsFinder";
import { useTranslations } from "next-intl";


export default function servicePage() {
    const t = useTranslations('ServicePage');

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4 text-lg">{chunks}</p>,

                    })}
                </div>                <PartsFinder />

            </PageLayout>


        </ section>
    );
}
