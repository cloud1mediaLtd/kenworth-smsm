import BrandsContainer from "components/brandsContainer";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";

export default function VehiclePageLayout({ children }) {
    const locale = useLocale();
    return (
        <div className="">
            <div className='z-2 '>
                <div className="overflow-hidden sticky top-0 z-50 bg-slate-50" >
                    <div className="content-container-no-bg">

                        <BrandsContainer locale={locale} />
                        {/* Fixed overlay */}
                    </div>
                </div>

                <Separator className='mb-4' />
                <div className="content-container-no-bg">
                    {children}
                </div>
            </div>
        </div>
    );
}


