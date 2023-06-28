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
            href: '/new',
            imageSrc: '/fiatThumb.webp',
        },
        {
            key: t('vehicles.title'),
            href: '/vehicles',
            imageSrc: '/jeep.jpg',
        },
        {
            key: t('spareParts.title'),
            href: '/parts',
            imageSrc: '/parts.jpeg',
        },
        {
            key: t('service.title'),
            href: '/service',
            imageSrc: '/moparService.jpeg',
        },
        { key: t('special.title'), href: '#', imageSrc: '/saleRed.png' },
    ]

    return (

        <section aria-labelledby="category-heading" className="sm:pt-8 xl:mx-auto xl:max-w-7xl">
            <div className=" sm:flex sm:items-center sm:justify-between px-5 lg:px-8 xl:px-0">
                <h2 id="category-heading" className=" text-2xl font-bol text-gray-900 tracking-wide">
                    {t('content.title')}
                </h2>
                <a href="#" className=" hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:blocksm:px-8 lg:px-8 xl:px-0">
                    {t('content.browseAll')}
                    <span aria-hidden="true"> {`${isRTL ? '\u2190' : '\u2192'}`}</span>
                </a>
            </div>



            <div className="mt-5">

                <div className="relative px-5 lg:px-8 xl:px-0">
                    <div className="relative grid grid-cols-1 md:grid-cols-5 gap-5">
                        {categories.map((category) => (
                            <a
                                key={category.key}
                                href={category.href}
                                className="relative flex h-32 md:h-72 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75"
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

            <div className="mt-6 px-4 sm:hidden">
                <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                    {t('content.browseAll')}
                    <span aria-hidden="true"> {`${isRTL ? '\u2190' : '\u2192'}`}</span>
                </a>
            </div>
        </section>
    )
}