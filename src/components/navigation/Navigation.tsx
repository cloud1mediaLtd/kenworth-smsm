'use client';
import { useTranslations } from 'next-intl';
import clsx from 'clsx';
import { useLocale } from 'next-intl';
import Link from 'next/link'
import { Button } from '../ui/button'
import { Aside } from '../aside/Aside';
import { Separator } from 'components/ui/separator';
import NavLink from '../aside/navLink';


interface NavigationItem {
  key: string;
  href: string;
  title: string;
}

const Navigation = () => {
  const t = useTranslations('Navigation');
  const z = useTranslations('Name');
  const locale = useLocale();

  const isRTL = locale === 'ar';
  const titleClass = clsx({ 'pl-5': isRTL, 'pr-5': !isRTL });

  const mainNavigation: NavigationItem[] = [
    { key: 'trucks', href: '/trucks', title: t('trucks.title') },
    { key: 'parts', href: '/parts', title: t('parts.title') },
    { key: 'service', href: '/service', title: t('services.title') },
    { key: 'contact', href: '/contact', title: t('contact.title') },

  ];

  return (
    <section className='relative shadow-sm border-b'>
      <nav aria-label="Top" className='py-1'>
        {/* Secondary navigation */}
        <div className="content-container-no-bg">
          <div className="flex py-6 items-center justify-between">
            {/* Logo (lg+) */}
            <div className={`flex items-center gap-4 font-semibold text-lg tracking-wide ${isRTL ? 'mr-0' : 'lg:ml-0'}`}>
              <Link href="/" className='flex items-center gap-3'>
                <span className="sr-only">Gazos</span>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=black"
                  alt=""
                />

                <span className="">
                  Gasos
                </span>
              </Link>

              <Separator orientation='vertical' className='h-12' />

              <img
                className="h-10 w-auto"
                src="/logos/kenworth_logo.png"
                alt=""
              />

            </div>
            <div className='md:flex items-center gap-6'>
              {/* {mainNavigation.map(({ key, href, title }) => (
                <Link className={"hidden md:flex items-center text-base font-medium text-white tracking-wide"} key={key} href={href}>
                  {title}
                </Link>
              ))} */}

              <div className='flex gap-4 items-center'>



                <a href="#menu-aside" className=''>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-8">
                    <title>Pass</title>

                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <MenuAside mainNavigation={mainNavigation} />

    </section>
  );
};

export default Navigation;


function MenuAside({ mainNavigation }) {
  return (
    <Aside id="menu-aside" heading="Menu">
      <main className="flex flex-col gap-2 pr-12 lg:pr-20 xl:pr-24 pl-3 pt-3">
        {mainNavigation.map(({ key, href, title }) => (
          <div key={key}>

            <NavLink href={href}>
              {title}
            </NavLink>

            <Separator orientation="horizontal" className="my-2" />

          </div>
        ))}

        <div className="flex flex-col gap-3 grow w-full">
          <Link href="/pay"

          >
            <Button
              size={"default"}
              className="w-full"
            >
              Book a Service
              <img
                src="/images/stripe.svg"
                alt=""
                className="h-6 w20 object-contain" />
            </Button>

          </Link>

        </div>
      </main>
    </Aside>
  );
}

