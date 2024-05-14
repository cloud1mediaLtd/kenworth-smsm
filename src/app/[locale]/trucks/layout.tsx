
import { useLocale } from "next-intl";

export default function VehiclePageLayout({ children }) {
    const locale = useLocale();

    return (
        <div className="relative animate-in">
            <div className="">
                {children}
            </div>
        </div>
    );
}