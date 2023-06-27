"use client";
import PageLayout from "components/PageLayout";
import Brands from "components/brands";
import { useTranslations } from "next-intl";


export default function VehiclePage() {
    const t = useTranslations('VehiclesPage');

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