import { useLocale } from "next-intl";

export default function PostsLayout({ children }) {
    const locale = useLocale();
    return (
        <div className='content-container-no-bg z-2 relative'>

            {children}
        </div>
    );
}