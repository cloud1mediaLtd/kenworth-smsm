"use client";
import PageLayout from "components/PageLayout";
import Brands from "components/brands";
import { Separator } from "components/ui/separator";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";


export default function VehiclePage() {
    const t = useTranslations('VehiclesPage');
    const locale = useLocale();

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="flex flex-col gap-5">
                    {t.rich('description', {
                        p: (chunks) =>
                            <p className="">{chunks}</p>,
                    })}
                </div>
                <Separator className="my-6" />
                <Suspense fallback={<>loading...</>}>
                    <Brands locale={locale} />
                </Suspense>

            </PageLayout>


        </ section>
    );
}