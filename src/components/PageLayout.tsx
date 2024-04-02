import { useTranslations } from 'next-intl';
import type { ReactNode } from 'react';
import { useLocale } from 'next-intl';

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
    <section className='relative content-container-no-bg mt-6'>

      <h1 className=''>
        {title}
      </h1>
      <div className='mt-6 '>
        {children}
      </div>

    </ section>
  );
}
