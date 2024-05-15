import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "components/ui/breadcrumb"
import { Slash } from "lucide-react";
import Link from "next/link";

interface VehicleBreadCrumbProps {
    topLink?: string;
    topLinkHref?: string;
    secondLink?: string;
    secondLinkHref?: string;
}

export default function VehicleBreadCrumb({
    topLink,
    topLinkHref,
    secondLink,
}: VehicleBreadCrumbProps) {
    return (
        <div className="py-3 font-semibold">
            <Breadcrumb>
                <BreadcrumbList>

                    <BreadcrumbItem>
                        <BreadcrumbPage>
                            <Link href={`/trucks/${topLinkHref}`}>
                                {topLink}
                            </Link>
                        </BreadcrumbPage>
                    </BreadcrumbItem>

                    {secondLink && (
                        <>
                            <BreadcrumbSeparator >
                                <Slash />
                            </BreadcrumbSeparator >

                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <span className="font-semibold">
                                        {secondLink}
                                    </span>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )}

                </BreadcrumbList>
            </Breadcrumb>
        </div>


    );
}


