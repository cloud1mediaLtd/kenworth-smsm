"use client";
import PageLayout from "components/PageLayout";

import { useTranslations } from "next-intl";


export default function partsPage() {
    const t = useTranslations('ContactPage');

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>
            </PageLayout>


        </ section>
    );
}