import VehicleBreadCrumb from "../components/breadCrumb";

export default function T880Page() {
    return (
        <div>
            <div>
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="T880" secondLinkHref="/trucks/t880" />

            </div>
            T880
        </div>
    )
}