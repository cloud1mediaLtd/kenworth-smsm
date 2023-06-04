"use client";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";

interface NavigationItem {
    key: string;
    href: string;
    title: string;
}

export default function Categories() {

    const t = useTranslations('Categories');

    const locale = useLocale();

    const isRTL = locale === 'ar';
    const titleClass = clsx({ 'pl-5': isRTL, 'pr-5': !isRTL });


    const categories = [] = [
        {
            key: t('newArrivals.title'),
            href: '#',
            imageSrc: '/fiatThumb.webp',
        },
        {
            key: t('vehicles.title'),
            href: '#',
            imageSrc: '/jeep.jpg',
        },
        {
            key: t('spareParts.title'),
            href: '#',
            imageSrc: '/parts.jpeg',
        },
        {
            key: t('service.title'),
            href: '#',
            imageSrc: '/moparService.jpeg',
        },
        { key: t('sale.title'), href: '#', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg' },
    ]

    return (

        <section aria-labelledby="category-heading" className="pt-24 sm:pt-12 xl:mx-auto xl:max-w-7xl xl:px-8">
            <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
                <h2 id="category-heading" className="text-2xl font-bold tracking-tight text-gray-900">
                    Categories
                </h2>
                <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                    Browse all categories
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>



            <div className="mt-4">
                <div className="-my-2">
                    <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
                        <div className="flex px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 gap-5">
                            {categories.map((category) => (
                                <a
                                    key={category.key}
                                    href={category.href}
                                    className="relative flex h-72 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                                >
                                    <span aria-hidden="true" className="absolute inset-0">
                                        <img src={category.imageSrc} alt="" className="h-full w-full object-cover object-center" />
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                    />
                                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.key}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 px-4 sm:hidden">
                <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    Browse all categories
                    <span aria-hidden="true"> &rarr;</span>
                </a>
            </div>
        </section>
    )
}