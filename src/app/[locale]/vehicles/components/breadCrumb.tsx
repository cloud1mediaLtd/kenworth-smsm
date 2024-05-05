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

        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/vehicles">
                        <BreadcrumbEllipsis className="h-4 w-4" />
                    </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbPage>
                        <Link href={`/vehicles/${topLinkHref}`}>
                            {topLink}
                        </Link>
                    </BreadcrumbPage>
                </BreadcrumbItem>

                {secondLink && secondLinkHref && (
                    <>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>
                                <Link href={`/vehicles/model/${secondLinkHref}`}>
                                    {secondLink}
                                </Link>
                            </BreadcrumbPage>
                        </BreadcrumbItem>
                    </>
                )}

            </BreadcrumbList>
        </Breadcrumb>
    );
}


