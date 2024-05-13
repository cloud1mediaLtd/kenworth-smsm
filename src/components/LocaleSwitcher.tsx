'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from 'components/ui/select';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const localeMapping: Record<string, 'locale.en' | 'locale.ar'> = {
    en: 'locale.en',
    ar: 'locale.ar'
  };

  function onSelectChange(newLocale: string) {
    // Adjust the path by replacing the current locale with the new locale
    // Assuming the first segment of the pathname is the current locale
    const newPathname = pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}${pathname}`; // Fallback for when the pathname doesn't start with the locale

    startTransition(() => {
      router.replace(newPathname);
    });
  }

  return (
    <div className="inline-block">
      <Select onValueChange={onSelectChange} disabled={isPending}>
        <SelectTrigger className="w-[180px] text-white">
          <SelectValue placeholder={t('label')} />
        </SelectTrigger>
        <SelectContent side='top'>
          <SelectGroup>
            {['en', 'ar'].map((cur) => (
              <SelectItem key={cur} value={cur}>
                {t('locale', { locale: cur })}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}

