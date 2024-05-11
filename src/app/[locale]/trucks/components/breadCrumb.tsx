"use client"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "components/ui/breadcrumb"
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
    secondLinkHref,
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

                    {secondLink && secondLinkHref && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>
                                    <Link href={`/trucks/${secondLinkHref}`}>
                                        <span className="font-semibold">
                                            {secondLink}
                                        </span>
                                    </Link>
                                </BreadcrumbPage>
                            </BreadcrumbItem>
                        </>
                    )}

                </BreadcrumbList>
            </Breadcrumb>
        </div>


    );
}


