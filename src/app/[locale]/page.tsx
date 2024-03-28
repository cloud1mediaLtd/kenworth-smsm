
import { useLocale, useTranslations } from 'next-intl';
import Hero from 'components/hero';

import Brands from 'components/brands';
import { Suspense } from 'react';



export default async function IndexPage() {


  const locale = useLocale();


  // add booking for free mot

  return (
    <section className=''>

      <Hero />
      <Suspense fallback={<>loadiong...</>}>
        <Brands locale={locale} />
      </Suspense>

    </ section>
  );
}
