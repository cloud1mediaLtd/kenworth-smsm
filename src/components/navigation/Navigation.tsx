import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Aside } from '../aside/Aside';
import { Separator } from 'components/ui/separator';
import NavigationLink from './NavigationLink'; // Ensure this path is correct
import { getTranslations } from 'next-intl/server';
import NavLink from 'components/aside/navLink';
import { useTheme } from 'next-themes';

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
    { key: 'service', href: '/service', title: t('services_parts.title') },
    { key: 'contact', href: '/contact', title: t('contact.title') },
  ];



  return (
    <section className="relative shadow-sm border-b">
      <nav aria-label="Top" className="py-1">
        <div className="container">
          <div className="flex py-6 items-center justify-between">
            <div className={`flex flex-nowrap items-center gap-4 font-semibold text-lg tracking-wide ${isRTL ? 'mr-0' : 'lg:ml-0'}`}>
              <Link href="/" className="relative flex items-center gap-3">
                <span className="sr-only">Gazos</span>
                <img
                  className="h-8 w-auto dark:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=black"
                  alt="Light Logo"
                />
                <img
                  className="h-8 w-auto hidden dark:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=white"
                  alt="Dark Logo"
                />
                <div className="min-w-14">
                  {z('title')}
                </div>
              </Link>

              <Separator orientation="vertical" className="h-12" />

              <img
                className="h-8 sm:h-10 w-auto"
                src="/logos/kenworth_logo.png"
                alt=""
              />
            </div>
            <div className="">
              <div className='md:flex items-center gap-6 hidden'>
                {mainNavigation.map(({ key, href, title }) => (
                  <NavigationLink key={key} href={href}>
                    {title}
                  </NavigationLink>
                ))}
              </div>

              <div className="flex gap-4 items-center md:hidden">
                <a href="#menu-aside">
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
      </main>
    </Aside>
  );
}
