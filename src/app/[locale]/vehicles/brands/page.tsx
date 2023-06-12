"use client";
import PageLayout from "components/PageLayout";
import Brands from "components/brands";
import PartsFinder from "components/partsFinder/partsFinder";
import { useTranslations } from "next-intl";


export default function partsPage() {
    const t = useTranslations('IndexPage');

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="max-w-2xl">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>
                <Brands />
            </PageLayout>


        </ section>
    );
}