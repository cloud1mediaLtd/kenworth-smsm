import BrandsOnly from "components/brandsonly";
import { Card } from "components/ui/card";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";

export default function VehiclePageLayout({ children }) {
    const locale = useLocale();
    return (
        <div className="">
            <div className='content-container-no-bg z-2 relative'>
                <div className="overflow-hidden relative">
                    <div className="brands-scroll-container overflow-x-auto">
                        <BrandsOnly className={"min-w-[700px]"} locale={locale} />
                        {/* Padding div to ensure content is not obscured by the overlay */}
                        <div className="end-padding md:hidden" />
                    </div>
                    {/* Fixed overlay */}
                    <div className="brands-overlay md:hidden" />
                </div>

                <Separator className='mb-6' />
                {children}
            </div>
        </div>
    );
}

