import PageLayout from "components/PageLayout";
import PartsFinder from "components/partsFinder/partsFinder";
import { useTranslations } from "next-intl";

export default function partsPage() {
    const t = useTranslations('PartsPage');

    return (
        <section className=''>
            <PageLayout title={t('title')}>
                <div className="flex flex-col gap-5">
                    {t.rich('description', {
                        p: (chunks) => <p className="">{chunks}</p>,

                    })}
                </div>
                <PartsFinder />
            </PageLayout>
        </ section>
    );
}
