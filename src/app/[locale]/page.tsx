'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import Hero from 'components/hero';
import Collections from 'components/collections';
import Featured from 'components/featured';
import Featured2 from 'components/featured2';
import Categories from 'components/categories';
import Brands from 'components/brands';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
    <section className=''>

      <Hero />
      <Brands />


    </ section>
  );
}
