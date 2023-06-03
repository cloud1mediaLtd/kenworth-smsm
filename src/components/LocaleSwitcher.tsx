'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname } from 'next-intl/client';
import { ChangeEvent, useTransition } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'


export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    startTransition(() => {
      router.replace(`/${event.target.value}${pathname}`);
    });
  }

  return (

    <>

      <div className="inline-block">
        <label htmlFor="mobile-currency" className="sr-only">
          {t('label')}
        </label>
        <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
          <select
            className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-500 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-600 bg-gray-900"
            defaultValue={locale}
            disabled={isPending}
            onChange={onSelectChange}
          >
            {['en', 'ar'].map((cur) => (
              <option key={cur} value={cur}>
                {t('locale', { locale: cur })}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
            <ChevronDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </div>
        </div>
      </div>
    </>
  );
}
