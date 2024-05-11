import BrandsContainer from "components/brands/brandsContainer";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";
import VehicleBreadCrumb from "./components/breadCrumb";


export default function VehiclePageLayout({ children }) {
    const locale = useLocale();

    return (
        <div className="relative">
            <div className="content-container-no-bg">
                {children}
            </div>
        </div>
    );
}