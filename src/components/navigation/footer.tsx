"use client";
import Link from "next/link"
import { Separator } from "../ui/separator"
import MapComponent from "./mapComponent"
import { Card } from "components/ui/card"
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"
import { ModeToggle } from "components/ui/darkToggle"
import LocaleSwitcher from "components/LocaleSwitcher"
import ShopStatus from 'components/navigation/shopstatus';
import { useLocale, useTranslations } from "next-intl";


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
        { name: 'T880', href: '/trucks/t880' },
        { name: 'C500', href: '/trucks/c500' },
        { name: '963', href: '/trucks/963' },
    ],
    company: [
        { name: 'About', name_ar: 'حول الشركة', href: '/about' },
        { name: 'Careers', name_ar: 'وظائف', href: '/careers' },
        { name: 'Business Center', name_ar: 'مركز الأعمال', href: '/business' },
    ],

    connect: [
        { name: 'Contact Us', name_ar: 'اتصال', href: '/contact' },
    ],
}

export default function Footer() {
    const t = useTranslations('AboutPage');

    const isRtl = useLocale() === 'ar';

    return (
        <footer aria-labelledby="">
            <Separator className="my-12" />

            <div className="flex flex-col justify-center relative bg-kenbg" id="footer">

                <div className="relative bg-white" style={{ height: "100%", width: " 100%" }}>
                    <MapComponent longitude={13.12761326746804} latitude={32.82114794934512} />
                </div>
                <div className="content-container-no-bg">

                    <Card className='flex -mt-24 z-40 relative p-4 items-center'>

                        <div className='grid md:grid-cols-2 gap-6 items-center'>
                            <div className="flex flex-col gap-3 text-sm font-semibold text-center md:text-start">
                                {t("contact")}
                            </div>

                            <div className="flex flex-col">

                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2">
                                        <MapPinIcon className='h-5 w-5' />

                                        <p className="text-sm font-semibold">
                                            {isRtl ? (<span>٧ كم - طريق السواني,</span>) : (<span>7km - Al-Swany Road,</span>)}
                                        </p>
                                        <span className="text-sm font-semibold">
                                            {isRtl ? (<span>طرابلس - السواني</span>) : (<span>Al-Swany - Tripoli</span>)}
                                        </span>

                                    </div>
                                    <Separator className="" />

                                    <Link href="/contact" className="">
                                        <span className="underline-offset-4 hover:underline text-sm font-semibold flex gap-3">
                                            <PhoneIcon className='h-5 w-5' />
                                            <span dir="ltr">
                                                +218 91 000 0000

                                            </span>
                                        </span>
                                    </Link>
                                    <Separator className=" " />

                                    <Link href="/contact" className="">
                                        <span className="underline-offset-4 hover:underline text-sm font-semibold flex gap-3">
                                            <MailIcon className='h-5 w-5' /> info@gasoslibya.ly
                                        </span>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </Card>
                </div>

            </div>

            <div className="bg-kenbg py-6">
                <div className="content-container-no-bg grid grid-cols-3 gap-8">
                    <div>
                        <Link href="/trucks">
                            <h3 className="text-sm font-semibold text-white">
                                {isRtl ? (<span>شاحنات</span>) : (<span>Our Trucks</span>)}
                            </h3>
                        </Link>
                        <Separator className="my-3" />
                        <div className="grid grid-cols-1 gap-3">
                            {footerNavigation.vehicles.map((item) => (
                                <span key={item.name} className="text-sm">
                                    <Link href={item.href} className="text-gray-100 hover:text-white">
                                        {item.name}

                                    </Link>
                                </span>
                            ))}
                        </div>
                    </div>
                    <div>

                        <h3 className="text-sm font-semibold text-white">
                            {isRtl ? (<span>الشركة</span>) : (<span>Company</span>)}
                        </h3>
                        <Separator className="my-3" />

                        <ul className="space-y-3">
                            {footerNavigation.company.map((item) => (
                                <li key={item.name} className="text-sm">
                                    <Link href={item.href} className="text-gray-100 hover:text-white">
                                        {isRtl ? (<span>{item.name_ar}</span>) : (<span>{item.name}</span>)}

                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>

                        <h3 className="text-sm font-semibold text-white">
                            {isRtl ? (<span>اﺗﺼﻞ</span>) : (<span>Connect</span>)}
                        </h3>

                        <Separator className="my-3" />

                        <ul className="space-y-3">
                            {footerNavigation.connect.map((item) => (
                                <li key={item.name} className="text-sm">
                                    <Link href={item.href} className="text-gray-100 hover:text-white">
                                        {isRtl ? (<span>{item.name_ar}</span>) : (<span>{item.name}</span>)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>

                <div className="flex justify-between content-container-no-bg border-t border-background/50 mt-8">
                    <p className="text-sm text-gray-200 py-6">Copyright &copy; 2024 Gasos</p>
                    <div className="flex gap-5 items-center">
                        <ModeToggle />
                        <LocaleSwitcher />
                    </div>
                </div>
            </div>
        </footer>
    )
}
