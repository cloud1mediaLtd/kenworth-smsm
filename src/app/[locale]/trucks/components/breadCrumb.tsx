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
                            <BreadcrumbSeparator />
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


