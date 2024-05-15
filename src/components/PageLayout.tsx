import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useLocale } from 'next-intl';
import { Separator } from './ui/separator';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({ children, title }: Props) {
  const t = useTranslations('PageLayout');
  const locale = useLocale();

  // determine if the current locale is 'ar'
  const isRTL = locale === 'ar';


  return (
    <section className='relative container animate-in'>

      <div className='flex justify-center'>
        <h1 className='pt-12'>
          {title}
        </h1>

      </div>

      <Separator className='my-12' />

      <div className='mt-6 '>
        {children}
      </div>

    </ section>
  );
}
