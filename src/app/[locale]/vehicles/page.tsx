import Brands from "app/[locale]/vehicles/components/brands";
import { Separator } from "components/ui/separator";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";

export default function VehiclePage() {
    const t = useTranslations('VehiclesPage');
    const locale = useLocale();

    return (
        <section className=''>

            <div className="flex flex-col md:flex-row gap-10 items-center pb-12 pt-6">
                <h1 className=''>
                    {t('title')}
                </h1>

                <Separator
                    orientation='vertical'
                    className='h-16 md:block hidden'
                />
                <div className="flex flex-col gap-5">
                    {t.rich('description', {
                        p: (chunks) =>
                            <p className="">{chunks}</p>,
                    })}
                </div>

            </div>
            <Separator
                orientation='horizontal'
                className='my-6'
            />

            <Suspense fallback={<>loading...</>}>
                <Brands locale={locale} />
            </Suspense>

        </ section>
    );
}