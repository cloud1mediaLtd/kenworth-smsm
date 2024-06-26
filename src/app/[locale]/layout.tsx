import { Rubik, Inter } from "next/font/google";
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
import MobileFooter from 'components/navigation/mobileFooter';
import { ThemeProvider } from 'components/ui/themeProvider';
import HotjarSnippet from 'lib/hotjar';
import { locales } from "config";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";

// const components = {
//   page: Page,
//   post: Post,
//   feature: Feature,
//   grid: Grid,
//   teaser: Teaser,
//   title: Title,
//   excerpt: Excerpt,
//   textarea: TextArea,
//   image: Image,
//   main_image: MainImage,
//   vehicle_gallery: VehicleGallery
// };

// storyblokInit({
//   accessToken: process.env.STORYBLOK_API_TOKEN,
//   use: [apiPlugin],
//   components,
// });

// console.log('storyblokInit', storyblokInit);


const tajawal = Rubik({
  weight: ['300', '400', '500', '700', '800', '900'],
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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale }
}: Omit<Props, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title')
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  unstable_setRequestLocale(locale);

  const isRTL = locale === 'ar';
  const font = isRTL ? tajawal : inter;

  return (
    <html className="" lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={clsx(font.className, 'bg-slate-50 dark:bg-background')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <link href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css" rel="stylesheet" />

            <Navigation />
            <section className=''>
              {children}
            </section>

            <Footer />

            <div className="sticky bottom-0 z-50">
              <MobileFooter isRtl={isRTL} />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
        <HotjarSnippet />

      </body>

    </html>
  );
}