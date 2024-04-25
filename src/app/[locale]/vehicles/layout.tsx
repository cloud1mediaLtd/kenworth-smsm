import BrandsOnly from "components/brandsonly";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";

export default function VehiclePageLayout({ children }) {
    const locale = useLocale();
    return (
        <div className="">
            <div className='z-2 '>
                <div className="overflow-hidden sticky top-0 z-50 bg-slate-50" >
                    <div className="brands-scroll-container overflow-x-auto px-4 ">
                        <BrandsOnly className={"min-w-[700px]"} locale={locale} />
                        {/* Padding div to ensure content is not obscured by the overlay */}
                    </div>
                    {/* Fixed overlay */}
                    <div className="brands-overlay md:hidden" />
                </div>

                <Separator className='mb-4' />
                <div className="content-container-no-bg">
                    {children}
                </div>
            </div>
        </div>
    );
}


