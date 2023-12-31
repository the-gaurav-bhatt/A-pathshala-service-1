'use client';
import React, { useContext } from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
const CallToAction = () => {
  const pathname = usePathname();
  console.log(pathname);
  const linkStyle =
    'rounded-xl text-sm px-3 py-1 hover:shadow-md transform hover:-translate-y-1 duration-300 font-bold whitespace-nowrap text-white bg-cta-green-gradient';
  return (
    <div className="flex gap-2">
      <Link href={'/signup'} className={linkStyle + ' p-2'}>
        Join for Free
      </Link>
      <Link href={'/login'} className={linkStyle}>
        Login
      </Link>
    </div>
  );
};

export default CallToAction;
