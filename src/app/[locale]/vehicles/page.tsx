"use client";
import PageLayout from "components/PageLayout";
import Brands from "components/brands";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";


export default function VehiclePage() {
    const t = useTranslations('VehiclesPage');
    const locale = useLocale();

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="max-w-2xl">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>
                <Suspense fallback={<>loadiong...</>}>
                    <Brands locale={locale} />
                </Suspense>

            </PageLayout>


        </ section>
    );
}