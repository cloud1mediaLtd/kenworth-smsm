import { useTranslations } from 'next-intl';
import { ReactNode } from 'react';
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
    <section className='relative xl:mx-auto xl:max-w-7xl'>

      <div className="flex-grow flex-col py-10 px-8 xl:px-0">
        <div className='text-3xl font-semibold leading-tight tracking-tight text-blue-500 md:text-5xl'>
          <div>
            <h1 className='text-3xl font-semibold leading-tight tracking-tight text-gray-700 md:text-5xl'>
              {title}
            </h1>
            <p></p>
            <div className='mt-6 text-gray-500 md:text-lg'>{children}</div>
          </div>
        </div>

      </div>
    </ section>
  );
}
