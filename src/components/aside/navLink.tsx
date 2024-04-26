'use client'

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const NavLink = ({ href, children }) => {
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);

        // Reset the hash to close the Aside
        if (window.location.hash) {
            window.location.hash = '';
        }
    };

    return (
        <Link href={href} passHref onClick={handleClick} className='font-semibold'>
            {children}
        </Link>
    );
};

export default NavLink;
