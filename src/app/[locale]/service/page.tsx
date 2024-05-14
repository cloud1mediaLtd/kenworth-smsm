"use client";
import PageLayout from "components/PageLayout";
import PartsFinder from "components/partsFinder/partsFinder";
import { useTranslations } from "next-intl";

export default function servicePage() {
    const t = useTranslations('Service_Parts_Page');

    return (
        <section className=''>

            <PageLayout title={t('title')}>

                <div className='flex flex-col gap-6'>
                    <div className="flex flex-col gap-3">
                        {t.rich('maintenance', {
                            h1: (chunks) => <h1 className="">{chunks}</h1>,
                            p: (chunks) => <p className="">{chunks}</p>,
                        })}
                    </div>

                    <div className="flex flex-col gap-3">
                        {t.rich('repairs', {
                            h1: (chunks) => <h1 className="">{chunks}</h1>,
                            p: (chunks) => <p className="">{chunks}</p>,
                        })}
                    </div>

                    <div className="flex flex-col gap-3">
                        {t.rich('parts', {
                            h1: (chunks) => <h1 className="">{chunks}</h1>,
                            p: (chunks) => <p className="">{chunks}</p>,
                        })}
                    </div>

                    <div className="flex flex-col gap-3">
                        {t.rich('diagnostic', {
                            h1: (chunks) => <h1 className="">{chunks}</h1>,
                            p: (chunks) => <p className="">{chunks}</p>,
                        })}
                    </div>

                    <div className="flex flex-col gap-3">
                        {t.rich('support', {
                            h1: (chunks) => <h1 className="">{chunks}</h1>,
                            p: (chunks) => <p className="">{chunks}</p>,
                        })}
                    </div>

                </div>

            </PageLayout>

        </ section>
    );
}
