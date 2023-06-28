'use client';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
import clsx from 'clsx';
import { useLocale } from 'next-intl';
import Link from 'next-intl/link';
import React, { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  QuestionMarkCircleIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'


interface NavigationItem {
  key: string;
  href: string;
  title: string;
}


const navigation = {
  categories: [
    {
      name: 'Vehicals',
      featured: [
        {
          name: 'Jeep',
          href: '#',
          imageSrc: '/jeep_renegade_trailhawk.jpeg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Dodge',
          href: '#',
          imageSrc: '/dodgeThumb.jpeg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Ram',
          href: '#',
          imageSrc: '/ramThumb.jpeg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },

        {
          name: 'Chrysler',
          href: '#',
          imageSrc: '/chryslerThumb.jpeg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Fiat',
          href: '#',
          imageSrc: '/fiatThumb.webp',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Parts',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const Navigation = () => {
  const t = useTranslations('Navigation');
  const z = useTranslations('Name');
  const locale = useLocale();

  const isRTL = locale === 'ar';
  const titleClass = clsx({ 'pl-5': isRTL, 'pr-5': !isRTL });

  const mainNavigation: NavigationItem[] = [
    { key: 'home', href: '/', title: t('home.title') },
    { key: 'about', href: '/about', title: t('about.title') },
    { key: 'vehicles', href: '/vehicles', title: t('vehicles.title') },
    { key: 'parts', href: '/parts', title: t('parts.title') },
    { key: 'service', href: '/service', title: t('services.title') },
    { key: 'contact', href: '/contact', title: t('contact.title') },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <section className='relative'>


      <div className="bg-white">
        {/* Mobile menu */}
        <Transition.Root show={mobileMenuOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom={isRTL ? 'translate-x-full' : '-translate-x-full'}
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo={isRTL ? 'translate-x-full' : '-translate-x-full'}
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                  <div className="flex px-4 pb-2 pt-5">
                    <button
                      type="button"
                      className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Links */}
                  <Tab.Group as="div" className="mt-2">
                    <div className="border-b border-gray-200">
                      <Tab.List className="-mb-px flex space-x-8 px-4">
                        {navigation.categories.map((category) => (
                          <Tab
                            key={category.name}
                            className={({ selected }) =>
                              classNames(
                                selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                                'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                              )
                            }
                          >
                            {category.name}
                          </Tab>
                        ))}
                      </Tab.List>
                    </div>
                    <Tab.Panels as={Fragment}>
                      {navigation.categories.map((category) => (
                        <Tab.Panel key={category.name} className="space-y-12 px-4 py-6">
                          <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                            {category.featured.map((item) => (
                              <div key={item.name} className="group relative">
                                <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                  <img src={item.imageSrc} alt={item.imageAlt} className="object-cover object-center" />
                                </div>
                                <a href={item.href} className="mt-6 block text-sm font-medium text-gray-900">
                                  <span className="absolute inset-0 z-10" aria-hidden="true" />
                                  {item.name}
                                </a>
                                <p aria-hidden="true" className="mt-1 text-sm text-gray-500">
                                  Shop now
                                </p>
                              </div>
                            ))}
                          </div>
                        </Tab.Panel>
                      ))}
                    </Tab.Panels>
                  </Tab.Group>

                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">

                    <div className="flow-root">
                      <Link href={t('about.href')} className="-m-2 block p-2 font-medium text-gray-900">
                        {t('about.title')}
                      </Link>
                    </div>

                  </div>



                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {/* Currency selector */}

                    <LocaleSwitcher />
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className="relative bg-gray-900">

          {/* Navigation */}
          <header className="relative z-10">
            <nav aria-label="Top">
              {/* Top navigation */}
              <div className="bg-gray-900">
                <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-4 lg:px-8 xl:px-0">
                  {/* Currency selector */}
                  <LocaleSwitcher />

                  <div className="flex items-center" dir='ltr'>
                    <a
                      dir='ltr'
                      href="tel:+218913868093"
                      className={`text-sm font-medium text-white hover:text-gray-100 ${isRTL ? 'pr-6' : 'pr-6'}`}
                    >
                      <span className="ltr ">+218 91 386 8093</span>
                    </a>
                    <a
                      href="#"
                      className='text-sm font-medium text-white hover:text-gray-100 tracking-normal'
                    >
                      info@smsm.ly
                    </a>
                  </div>
                </div>
              </div>

              {/* Secondary navigation */}
              <div className="bg-white bg-opacity-10 backdrop-blur-md backdrop-filter">
                <div className="mx-auto max-w-7xl px-4 sm:px-4 lg:px-8 xl:px-0">
                  <div>
                    <div className="flex h-16 items-center justify-between">
                      {/* Logo (lg+) */}
                      <div className={`hidden lg:flex ${isRTL ? 'mr-0' : 'lg:ml-0'}`}>
                        <a href="/">
                          <span className="sr-only">Your Company</span>
                          <img
                            className="h-8 w-auto"
                            src="https://tailwindui.com/img/logos/mark.svg?color=white"
                            alt=""
                          />
                        </a>
                      </div>
                      {/* Flyout menus 
                      <div className="hidden h-full lg:flex">

                        <Popover.Group className="inset-x-0 bottom-0 px-4">
                          <div className="flex h-full justify-center space-x-8">
                            {navigation.categories.map((category) => (
                              <Popover key={category.name} className="flex">
                                {({ open }) => (
                                  <>
                                    <div className="relative flex">
                                      <Popover.Button className="relative z-10 flex items-center justify-center text-sm font-medium text-white transition-colors duration-200 ease-out">
                                        {category.name}
                                        <span
                                          className={classNames(
                                            open ? 'bg-white' : '',
                                            'absolute inset-x-0 -bottom-px h-0.5 transition duration-200 ease-out'
                                          )}
                                          aria-hidden="true"
                                        />
                                      </Popover.Button>
                                    </div>

                                    <Transition
                                      as={Fragment}
                                      enter="transition ease-out duration-200"
                                      enterFrom="opacity-0"
                                      enterTo="opacity-100"
                                      leave="transition ease-in duration-150"
                                      leaveFrom="opacity-100"
                                      leaveTo="opacity-0"
                                    >
                                      <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                        <div className="relative bg-white">
                                          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                                            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                              {category.featured.map((item) => (
                                                <div key={item.name} className="group relative">
                                                  <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md bg-gray-100 group-hover:opacity-75">
                                                    <img
                                                      src={item.imageSrc}
                                                      alt={item.imageAlt}
                                                      className="object-cover object-center"
                                                    />
                                                  </div>
                                                  <a href={item.href} className="mt-4 block font-medium text-gray-900">
                                                    <span className="absolute inset-0 z-10" aria-hidden="true" />
                                                    {item.name}
                                                  </a>
                                                  <p aria-hidden="true" className="mt-1">
                                                    Shop now
                                                  </p>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </Transition>
                                  </>
                                )}
                              </Popover>
                            ))}



                            {mainNavigation.map(({ key, href, title }) => (
                              <Link className="flex items-center text-sm font-medium text-white" key={key} href={href}>
                                {title}
                              </Link>
                            ))}
                          </div>
                        </Popover.Group>
                      </div>
                      */}
                      <div className='hidden lg:flex'>
                        {mainNavigation.map(({ key, href, title }) => (
                          <Link className={` flex items-center text-sm font-medium text-white tracking-wide ${isRTL ? 'pl-6' : 'pr-6'}`} key={key} href={href}>
                            {title}
                          </Link>
                        ))}
                      </div>

                      {/* Mobile menu and search (lg-) */}
                      <div className="flex flex-1 items-center lg:hidden">
                        <button
                          type="button"
                          className={`p-2 text-white ${isRTL ? 'mr-2' : '-ml-2'}`}
                          onClick={() => setMobileMenuOpen(true)}
                        >
                          <span className="sr-only">Open menu</span>
                          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <div className="flex flex-1 items-center lg:hidden">
                        <Link href="/" className={`flex items-center justify-center lg:hidden ${isRTL ? 'ml-auto' : 'mr-auto'}`}>
                          <span className="sr-only">Smsm</span>
                          <img src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="" className="h-8 w-auto" />
                        </Link>
                      </div>

                      {/* Logo (lg-) */}
                      <div className={`flex items-center ${isRTL ? 'mr-8' : 'lg:ml-8'}`}>
                        {/* Help */}
                        <Link href="/faq" className="p-2 text-white">
                          <span className="sr-only">Help</span>
                          <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
