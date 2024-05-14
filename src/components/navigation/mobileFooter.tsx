import { Button } from "components/ui/button";
import { PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function MobileFooter({ isRtl }) {


    return (
        <footer className="flex sm:hidden shadow-lg h-18 border-t" dir="ltr">
            <div className="flex justify-between items-center w-full bg-black">
                <div className=" px-5 w-full">
                    <Button variant="secondary" className="flex justify-center w-full">
                        <Link
                            href="/quote/schedule"
                            className=" p-2 w-full rounded-md text-small-semi text-center hover:underline underline-offset-2 shadow-sm"
                        >
                            {isRtl ? (<span>اتصال</span>) : (<span>Contact</span>)}
                        </Link>
                    </Button>
                </div>

                <div className="flex gap-3 items-center justify-center bg-green-700 p-4 text-white h-18 w-18">
                    <Link
                        href={"tel:+442087768925"}>
                        <PhoneIcon className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}