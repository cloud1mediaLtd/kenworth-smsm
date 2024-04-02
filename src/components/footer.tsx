import Link from "next/link"


// const mainNavigation: NavigationItem[] = [
//     { key: 'about', href: '/about', title: t('about.title') },
//     { key: 'vehicles', href: '/vehicles', title: t('vehicles.title') },
//     { key: 'parts', href: '/parts', title: t('parts.title') },
//     { key: 'service', href: '/service', title: t('services.title') },
//     { key: 'contact', href: '/contact', title: t('contact.title') },
//   ];


const footerNavigation = {
    vehicles: [
        { name: 'Jeep', href: '/vehicles/jeep' },
        { name: 'Dodge', href: '#' },
        { name: 'Ram', href: '#' },
        { name: 'Chrysler', href: '#' },
        { name: 'Fiat', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Warranty', href: '#' },
    ],

    connect: [
        { name: 'Contact Us', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'Instagram', href: '#' },


    ],
}

export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-gray-900">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="content-container-no-bg">
                <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
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
                        </div>
                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">

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
                        </div>
                    </div>
                    <div className="mt-12 md:mt-16 xl:mt-0">
                        <h3 className="text-sm font-medium text-white">Find us</h3>

                    </div>
                </div>

                <div className="border-t border-gray-800 py-10">
                    <p className="text-sm text-gray-400">Copyright &copy; 2024 SMSM, Inc.</p>
                </div>
            </div>
        </footer>
    )
}
