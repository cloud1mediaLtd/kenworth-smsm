import BrandsOnly from "components/brandsonly";
import { Separator } from "components/ui/separator";
import { useLocale } from "next-intl";
import Link from "next/link";

export default function PostsLayout({ children }) {
    const locale = useLocale();
    return (
        <div className='content-container-no-bg z-2 relative'>

            {children}
        </div>
    );
}