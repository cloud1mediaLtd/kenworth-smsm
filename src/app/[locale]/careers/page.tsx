"use client";
import PageLayout from "components/PageLayout";

import { useTranslations } from "next-intl";


export default function careerPage() {
    const t = useTranslations('CareerPage');

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-700">{t('openPositions')}</h2>

                </div>
            </PageLayout>


        </ section>
    );
}