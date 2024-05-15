import Hero from 'app/[locale]/index/hero';
import { Separator } from 'components/ui/separator';
import Offers from './index/offers';
import FleetOffers from './index/fleetOffersCard';
import { Button } from 'components/ui/button';
import Link from 'next/link';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import ServiceSection from 'components/ServiceSection';

type Props = {
  params: { locale: string };
};

export default async function IndexPage({ params: { locale } }: Props) {

  const t = await getTranslations('IndexPage');

  unstable_setRequestLocale(locale);

  const isRtl = locale === 'ar';

  return (
    <section className='relative animate-in'>
      <div className='relative'>
        <Hero />
      </div>

      <main>
        <div className='content-container-no-bg my-12'>
          <div className='flex flex-col lg:flex-row gap-4'>
            <div className='flex flex-col  justify-center lg:basis-2/3 gap-3'>
              <div className='flex items-center gap-3'>
                <h1 className=' font-bold text-kenbg'>{t('title')}</h1>
              </div>

              <p className='text-base font-semibold'>
                {t('description')}
              </p>
            </div>
            <div className='flex lg:flex-col gap-3 items-center w-full lg:basis-1/3'>
              <Button size="lg" className='w-full bg-kenbg text-white' asChild>
                <Link href='/trucks' className='w-full'>{t('all_trucks')}</Link>
              </Button>
              <Button size="lg" variant='outline' className='w-full' asChild>
                <Link href='/about' className='w-full'>{t('about')}</Link>
              </Button>
            </div>
          </div>

          <Separator className="my-12" />

          <Offers isRtl={isRtl} />

          <Separator className="my-12" />
        </div>

        <ServiceSection />
        <div className='content-container-no-bg'>
          <Separator className="my-12" />
          <FleetOffers />

        </div>
      </main>

    </section>
  );
}
