import Link from "next/link"



const footerNavigation = {
    vehicles: [
        { name: 'Jeep', href: '/vehicles/jeep' },
        { name: 'Dodge', href: '#' },
        { name: 'Ram', href: '#' },
        { name: 'Chrysler', href: '#' },
        { name: 'Fiat', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Careers', href: '/careers' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Warranty', href: '#' },
    ],

    connect: [
        { name: 'Contact Us', href: '#' },
        { name: 'Facebook', href: '#' },
        { name: 'Twitter', href: '#' },
        { name: 'Instagram', href: '#' },
        { name: 'Pinterest', href: '#' },
    ],
}

export default function Footer() {
    return (
        <footer aria-labelledby="footer-heading" className="bg-gray-900 mt-8">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="py-20 xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="grid grid-cols-2 gap-8 xl:col-span-2">
                        <div className="space-y-12 md:grid md:grid-cols-2 md:gap-8 md:space-y-0">
                            <div>
                                <Link href="/vehicles"><h3 className="text-sm font-medium text-white">Shop</h3></Link>
                                <ul role="list" className="mt-6 space-y-6">
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
                                <h3 className="text-sm font-medium text-white">Company</h3>
                                <ul role="list" className="mt-6 space-y-6">
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
                                <h3 className="text-sm font-medium text-white">Connect</h3>
                                <ul role="list" className="mt-6 space-y-6">
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
                        <h3 className="text-sm font-medium text-white">Add Map here</h3>

                    </div>
                </div>

                <div className="border-t border-gray-800 py-10">
                    <p className="text-sm text-gray-400">Copyright &copy; 2023 SMSM, Inc.</p>
                </div>
            </div>
        </footer>
    )
}
