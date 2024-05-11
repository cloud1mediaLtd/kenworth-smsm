
import { useLocale } from "next-intl";

export default function VehiclePageLayout({ children }) {
    const locale = useLocale();

    return (
        <div className="relative">
            <div className="">
                {children}
            </div>
        </div>
    );
}