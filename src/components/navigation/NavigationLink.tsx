'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const locale = pathname.split('/')[1]; // Extract the locale
  const cleanedPathname = pathname.replace(`/${locale}`, ''); // Remove the locale segment
  const isActive = cleanedPathname === href;

  console.log(`Link: ${href}, isActive: ${isActive}`); // Log to verify

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'nav-link',
        isActive && 'nav-link-active',
        'px-3 transition-colors font-bold'
      )}
      href={href}
      {...rest}
    />
  );
}
