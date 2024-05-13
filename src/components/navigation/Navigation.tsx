import { useLocale } from 'next-intl';
import Link from 'next/link'
import { Aside } from '../aside/Aside';
import { Separator } from 'components/ui/separator';
import NavLink from '../aside/navLink';
import { getTranslations } from 'next-intl/server';

interface NavigationItem {
  key: string;
  href: string;
  title: string;
}

const Navigation = async () => {
  const t = await getTranslations('Navigation');
  const z = await getTranslations('Name');
  const isRTL = useLocale() === 'ar';

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
        <div className="container">
          <div className="flex py-6 items-center justify-between">
            {/* Logo (lg+) */}
            <div className={`flex flex-nowrap items-center gap-4 font-semibold text-lg tracking-wide ${isRTL ? 'mr-0' : 'lg:ml-0'}`}>
              <Link href="/" className='relative flex items-center gap-3'>
                <span className="sr-only">Gazos</span>
                <svg
                  className=" h-9 text-red-500 dark:text-red-500"
                  id="Layer_2"
                  data-name="Layer 2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 66.87 83.67"
                >
                  <defs>
                    <style>
                      {`.cls-1 { fill: currentColor; stroke-width: 0px; }`}
                    </style>
                  </defs>
                  <g id="Layer_1-2" data-name="Layer 1">
                    <polygon className="cls-1" points="18.27 26.97 33.84 0 49.41 26.97 33.84 53.95 18.27 26.97" />
                    <polygon className="cls-1" points="35.72 56.62 51.29 29.65 66.87 56.62 51.29 83.6 35.72 56.62" />
                    <polygon className="cls-1" points="0 56.69 15.57 29.72 31.15 56.69 15.57 83.67 0 56.69" />
                  </g>
                </svg>
                <div className="min-w-14">
                  {z('title')}
                </div>
              </Link>

              <Separator orientation='vertical' className='h-12' />

              <img
                className="h-8 sm:h-10 w-auto"
                src="/logos/kenworth_logo.png"
                alt=""
              />

            </div>
            <div className='md:flex items-center gap-6'>
              {mainNavigation.map(({ key, href, title }) => (
                <Link className={"hidden md:flex items-center text-base font-medium tracking-wide"} key={key} href={href}>
                  {title}
                </Link>
              ))}
              <div className='flex gap-4 items-center md:hidden'>
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
      <main className="flex flex-col gap-2 pr-12 lg:pr-20 xl:pr-24 pl-3 pt-3 ">
        {mainNavigation.map(({ key, href, title }) => (
          <div key={key}>

            <NavLink href={href}>
              {title}
            </NavLink>

            <Separator orientation="horizontal" className="my-2" />

          </div>
        ))}

      </main>
    </Aside>
  );
}

