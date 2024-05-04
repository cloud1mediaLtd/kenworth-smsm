import Brands from "app/[locale]/vehicles/components/brands";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import { XIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Suspense } from "react";

export default function VehiclePage() {
    const t = useTranslations('VehiclesPage');
    const locale = useLocale();

    return (
        <section className=''>

            {/* <div className="flex flex-col md:flex-row gap-10 items-center pb-12 pt-6">
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

            </div> */}

            <div className="flex gap-3 items-center hidden">

                <span className=" text-sm font-semibold">
                    Recommendations:
                </span>

                <div className="flex flex-wrap items-center gap-2">
                    <Button size="sm" className="mr-3">
                        Staff Pick
                    </Button>
                    <Button size="sm" className="mr-3">
                        Economical
                    </Button>
                    <Button size="sm" className="mr-3">
                        Family
                    </Button>
                    <Button size="sm" className="mr-3">
                        Excutive
                    </Button>
                    <Button size="sm" className="mr-3">
                        Luxury
                    </Button>
                    <Button size="sm" className="mr-3">
                        SUV
                    </Button>
                    <Button size="sm" className="mr-3">
                        Work
                    </Button>

                    <Button size="sm" className="">
                        Taxi
                    </Button>
                    <span>
                        <XIcon className="w-4 h-4" />
                    </span>

                </div>

            </div>

            {/* <Separator
                orientation='horizontal'
                className='my-6'
            /> */}

            <Suspense fallback={<>loading...</>}>
                <Brands locale={locale} />
            </Suspense>

        </ section>
    );
}