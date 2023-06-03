'use client';

import { useTranslations } from 'next-intl';
import PageLayout from 'components/PageLayout';
import Hero from 'components/hero';

export default function AboutPage() {
  const t = useTranslations('AboutPage');

  return (
    <>

      <PageLayout title={t('title')}>
        <div className="max-w-2xl">
          {t.rich('description', {
            p: (chunks) => <p className="mt-4">{chunks}</p>,

          })}
        </div>
      </PageLayout>
    </>
  );
}
