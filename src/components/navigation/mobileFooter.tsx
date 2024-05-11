import { MailIcon, PhoneIcon } from "lucide-react";
import Link from "next/link";

export default function MobileFooter() {
    return (
        <footer className="flex sm:hidden shadow-lg h-18 border-t" dir="ltr">
            <div className="flex justify-between items-center w-full bg-black">
                <div className=" px-5 w-full">
                    <span className="flex justify-center w-full">
                        <Link
                            href="/quote/schedule"
                            className="bg-slate-50 hover:bg-orange-600 p-2 w-full rounded-md text-small-semi text-center hover:underline underline-offset-2 shadow-sm"
                        >Contact</Link>
                    </span>
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