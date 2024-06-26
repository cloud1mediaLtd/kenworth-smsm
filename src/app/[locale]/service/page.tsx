import PageLayout from "components/PageLayout";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};

export default async function servicePage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    const t = await getTranslations('Service_Parts_Page');


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