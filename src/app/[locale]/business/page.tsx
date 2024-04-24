'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import Hero from 'app/[locale]/index/hero';

export default function aboutPage() {
  const t = useTranslations('BusinessCenterPage');

  return (
    <>


      <PageLayout title={t('title')}>
        <div className="">
          {t.rich('description', {
            p: (chunks) => <p className="mt-4 text-lg">{chunks}</p>,

          })}
        </div>
      </PageLayout>
    </>
  );
}
