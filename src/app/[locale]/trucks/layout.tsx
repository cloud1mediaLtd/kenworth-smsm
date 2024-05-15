import { unstable_setRequestLocale } from "next-intl/server";

export default function VehiclePageLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);


    return (
        <div className="relative animate-in">
            <div className="">
                {children}
            </div>
        </div>
    );
}