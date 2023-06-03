'use client';

import clsx from 'clsx';
import { usePathname } from 'next-intl/client';
import Link from 'next-intl/link';
import { ComponentProps } from 'react';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & {
  href: string;
};

export default function NavigationLink({ href, ...rest }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive}
      className={clsx(
        'inline-block px-3 transition-colors font-bold',
        isActive ? 'text-white' : 'text-gray-200 hover:text-gray-100'
      )}
      href={href}
      {...rest}
    />
  );
}
