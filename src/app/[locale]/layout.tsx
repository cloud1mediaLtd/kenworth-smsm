import { Tajawal, Inter } from '@next/font/google';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import Navigation from 'components/navigation/Navigation';
import Footer from 'components/navigation/footer';
import { storyblokInit, apiPlugin } from "@storyblok/react";



import Feature from "components/storyblok/Feature";
import Grid from "components/storyblok/Grid";
import Page from "components/storyblok/Page";
import Teaser from "components/storyblok/Teaser";
import TextArea from "components/storyblok/TextArea";
import Image from "components/storyblok/Image";
import Title from 'components/storyblok/Title';
import Post from 'components/storyblok/Post';
import Excerpt from 'components/storyblok/Excerpt';
import MainImage from 'components/storyblok/Main_image';
import VehicleGallery from 'components/storyblok/vehicleBloks/VehicleGallery';

const components = {
  page: Page,
  post: Post,
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  title: Title,
  excerpt: Excerpt,
  textarea: TextArea,
  image: Image,
  main_image: MainImage,
  vehicle_gallery: VehicleGallery
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

console.log('storyblokInit', storyblokInit);


const tajawal = Tajawal({
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic'],
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}


export async function generateMetadata({ params: { locale } }: Props) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages });

  return {
    title: t('LocaleLayout.title')
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages(locale);
  const bridgeOptions = { resolveRelations: ["article.author"] };


  const isRTL = locale === 'ar';
  const font = isRTL ? inter : inter;

  return (
    <html className="" lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={clsx(font.className, 'bg-slate-100')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <link href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css" rel="stylesheet" />

          <Navigation />
          <section className=''>
            {children}
          </section>


          <Footer />
        </NextIntlClientProvider>
      </body>

    </html>
  );
}