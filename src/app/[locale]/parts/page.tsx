"use client";
import PageLayout from "components/PageLayout";
import PartsFinder from "components/partsFinder/partsFinder";
import { useTranslations } from "next-intl";


export default function partsPage() {
    const t = useTranslations('PartsPage');

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="max-w-2xl">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>                <PartsFinder />

            </PageLayout>


        </ section>
    );
}
