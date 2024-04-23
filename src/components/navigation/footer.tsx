import Link from "next/link"
import { Separator } from "../ui/separator"
import MapComponent from "./mapComponent"
import { Card } from "components/ui/card"
import { MailIcon, PhoneCall } from "lucide-react"




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
        <footer aria-labelledby="footer-heading">

            <div className="content-container-no-bg mb-4">
                <Separator className="my-12" />


                <Card className="bg-slate-50 p-6 mt-4 flex flex-col md:flex-row gap-6 items-center justify-between">
                    <div className="flex gap-6">
                        <span className="text-large-semi">Tripoli:</span>
                        <p className="text-base-semi">Al-Swany Road</p>
                        <Separator orientation="vertical" className="h-6" />
                        <p className="text-base-semi">+218 477 675 675</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/contact">
                            <span className="text-primary underline-offset-4 hover:underline text-base-semi">
                                <PhoneCall />
                            </span>
                        </Link>
                        <Separator orientation="vertical" className="h-6" />

                        <Link href="/business">
                            <span className="text-primary underline-offset-4 hover:underline text-base-semi">
                                <MailIcon />
                            </span>
                        </Link>

                    </div>


                </Card>

            </div>
            <MapComponent longitude={13.12761326746804} latitude={32.82114794934512} />

            <div className="bg-primary py-6">
                <div className="content-container-no-bg grid grid-cols-4 gap-8">
                    <div>
                        <Link href="/vehicles">
                            <h3 className="text-sm font-medium text-white">
                                Our Brands</h3>
                        </Link>
                        <ul className="mt-6 space-y-6">
                            {footerNavigation.vehicles.map((item) => (
                                <li key={item.name} className="text-sm">
                                    <Link href={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-white">
                            Company
                        </h3>
                        <ul className="mt-6 space-y-6">
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
                        <ul className="mt-6 space-y-6">
                            {footerNavigation.connect.map((item) => (
                                <li key={item.name} className="text-sm">
                                    <a href={item.href} className="text-gray-300 hover:text-white">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* <Card className="bg-slate-50 p-6 justify-center items-center flex">
                        <div className="flex flex-col gap-6">
                            <div className="flex h-32 w-32 rounded-full bg-black items-center justify-center relative overflow-hidden">
                                <Image
                                    src='https://cdn-empmerch.newjobs.com/wp-content/uploads/2016/04/sales-rep-min-1024x683.jpg'
                                    alt='Mopar'
                                    fill={true}
                                    sizes='(max-width: 640px) 640px, 1920px'
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                            <span className="text-large-semi">Business Center</span>
                        </div>
                    </Card> */}

                </div>

                <div className=" content-container-no-bg border-t border-gray-800 mt-6">
                    <p className="text-sm text-gray-400 py-6">Copyright &copy; 2024 SMSM, Inc.</p>
                </div>
            </div>
        </footer>
    )
}