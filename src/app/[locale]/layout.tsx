import { Tajawal, Inter } from '@next/font/google';
import clsx from 'clsx';
import { notFound } from 'next/navigation';
import { createTranslator, NextIntlClientProvider } from 'next-intl';
import type { ReactNode } from 'react';
import Navigation from 'components/Navigation';
import Footer from 'components/footer';
import MapComponent from 'components/mapComponent';

const tajawal = Tajawal({
  weight: ['300', '400', '500', '700'],
  subsets: ['arabic'],
});

const inter = Inter({
  weight: ['300', '400', '500', '600', '700'],
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

  const isRTL = locale === 'ar';
  const font = isRTL ? inter : inter;

  return (
    <html className="" lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <body className={clsx(font.className, '')}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <link href="https://api.mapbox.com/mapbox-gl-js/v3.2.0/mapbox-gl.css" rel="stylesheet" />

          <Navigation />
          <section className=''>
            {children}
          </section>

          <MapComponent longitude={13.12761326746804} latitude={32.82114794934512} />

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}