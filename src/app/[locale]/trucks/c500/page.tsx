import VehicleBreadCrumb from "../components/breadCrumb";

export default function T880Page() {
    return (
        <div>
            <div>
                <VehicleBreadCrumb topLink={"Kenworth"} topLinkHref={``} secondLink="C500" secondLinkHref="/trucks/c500" />

            </div>
            C500
        </div>
    )
}