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
import { useBreadcrumb } from "./breadCrumbContext";

export default function VehicleBreadCrumb() {
    const breadcrumbs = useBreadcrumb();

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
                    <BreadcrumbPage>{breadcrumbs}</BreadcrumbPage>
                </BreadcrumbItem>

            </BreadcrumbList>
        </Breadcrumb>
    );
}


