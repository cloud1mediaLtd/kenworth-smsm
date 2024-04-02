import BrandsOnly from "components/brandsonly";
import { Card } from "components/ui/card";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";

export default function VehiclePageLayout({ children }) {
    const locale = useLocale();
    return (
        <div className="pt-0">
            <div className='content-container-no-bg z-2 relative'>
                <BrandsOnly locale={locale} />
                <Separator className='my-0' />
                {children}
            </div>
        </div>
    );
}

