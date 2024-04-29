import Link from "next/link"
import { Separator } from "../ui/separator"
import MapComponent from "./mapComponent"
import { Card } from "components/ui/card"
import { MailIcon, PhoneCall } from "lucide-react"
import { ModeToggle } from "components/ui/darkToggle"
import LocaleSwitcher from "components/LocaleSwitcher"
import ShopStatus from 'components/navigation/shopstatus';


// const mainNavigation: NavigationItem[] = [
//     { key: 'about', href: '/about', title: t('about.title') },
//     { key: 'vehicles', href: '/vehicles', title: t('vehicles.title') },
//     { key: 'parts', href: '/parts', title: t('parts.title') },
//     { key: 'service', href: '/service', title: t('services.title') },
//     { key: 'contact', href: '/contact', title: t('contact.title') },
//   ];

//convert href to name instead of id


const footerNavigation = {
    vehicles: [
        { name: 'Jeep', href: '/vehicles/3' },
        { name: 'Dodge', href: '/vehicles/1' },
        { name: 'Ram', href: '/vehicles/4' },
        { name: 'Chrysler', href: '/vehicles/2' },
        { name: 'Fiat', href: '/vehicles/5' },
        { name: 'Peugeot', href: '/vehicles/6' },
        { name: 'Mopar', href: '/parts' },

    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Careers', href: '/careers' },
        { name: 'Business Center', href: '#' },
    ],

    connect: [
        { name: 'Contact Us', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },


    ],
}

export default function Footer() {
    return (
        <footer aria-labelledby="">
            <Separator className="mt-8 mb-8" />

            <div className="flex flex-col justify-center relative bg-black" id="footer">

                <div className="relative bg-white" style={{ height: "100%", width: " 100%" }}>
                    <MapComponent longitude={13.12761326746804} latitude={32.82114794934512} />
                </div>

                <Card className="flex justify-between w-full mx-auto max-w-7xl relative p-4 gap-6 items-center -mt-12 z-40 h-24">

                    <div className="flex flex-col md:flex-row md:gap-5">
                        <span className="text-large-semi">Tripoli</span>
                        <Separator orientation="vertical" className="h-6 hidden md:block" />

                        <p className="text-base-semi">Al-Swany Road - Al-Swany</p>
                    </div>

                    <div className="flex  gap-5 ">

                        <ShopStatus />

                        <div className="flex justify-between gap-5">
                            <Link href="/contact" className="hidden lg:block">
                                <span className="underline-offset-4 hover:underline text-base-semi ">
                                    +218 91 000 0000
                                </span>
                            </Link>

                            <Separator orientation="vertical" className="h-6 hidden lg:block" />

                            <Link href="/contact" className="hidden lg:block">
                                <span className="underline-offset-4 hover:underline text-base-semi ">
                                    <MailIcon />
                                </span>
                            </Link>
                        </div>

                    </div>
                </Card>
            </div>

            <div className="bg-black py-6">
                <div className="content-container-no-bg grid grid-cols-3 gap-8">
                    <div>
                        <Link href="/vehicles">
                            <h3 className="text-sm font-medium text-white">
                                Our Brands</h3>
                        </Link>
                        <Separator className="my-3" />
                        <div className="grid grid-cols-2 gap-3">
                            {footerNavigation.vehicles.map((item) => (
                                <span key={item.name} className="text-sm">
                                    <Link href={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-white">
                            Company
                        </h3>
                        <Separator className="my-3" />

                        <ul className="mt-6 space-y-3">
                            {footerNavigation.company.map((item) => (
                                <li key={item.name} className="text-sm">
                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-white">
                            Connect
                        </h3>
                        <Separator className="my-3" />

                        <ul className="mt-6 space-y-3">
                            {footerNavigation.connect.map((item) => (
                                <li key={item.name} className="text-sm">
                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="flex justify-between content-container-no-bg border-t border-gray-800 mt-6">
                    <p className="text-sm text-gray-400 py-6">Copyright &copy; 2024 SMSM, Inc.</p>
                    <div className="flex gap-5 items-center">
                        <ModeToggle />
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </footer>
    )
}
