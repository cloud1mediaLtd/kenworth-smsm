
import PageLayout from "components/PageLayout";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

type Props = {
    params: { locale: string };
};

export default async function careerPage({ params: { locale } }: Props) {
    unstable_setRequestLocale(locale);

    const t = await getTranslations('CareerPage');

    return (
        <section className=''>

            <PageLayout title={t('title')}>
                <div className="">
                    {t.rich('description', {
                        p: (chunks) => <p className="mt-4">{chunks}</p>,

                    })}
                </div>

                <div className="mt-8">
                    <h2 className="">{t('openPositions')}</h2>

                </div>
            </PageLayout>


        </ section>
    );
}