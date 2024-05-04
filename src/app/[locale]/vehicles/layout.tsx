import BrandsContainer from "components/brands/brandsContainer";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";
import VehicleBreadCrumb from "./components/breadCrumb";
import { BreadcrumbProvider } from "./components/breadCrumbContext";

export default function VehiclePageLayout({ children, breadcrumbs }) {
    const locale = useLocale();

    return (
        <div className="relative">
            <div className="sticky top-0 z-50 bg-slate-50" >
                <div className="content-container-no-bg">
                    <BrandsContainer locale={locale} />
                </div>
                <Separator className='mb-4' />
            </div>

            <div>
                <div className="content-container-no-bg">
                    <VehicleBreadCrumb />
                </div>
            </div>

            <div className="content-container-no-bg">
                {children}
            </div>
        </div>
    );
}