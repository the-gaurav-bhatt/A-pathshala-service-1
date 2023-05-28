'use client';
import React, { useContext } from 'react';
// import Login from './Login';
// import userContext
import { usePathname } from 'next/navigation';
import Link from 'next/link';
const CallToAction = () => {
  // const user = useContext(userContext)
  const pathname = usePathname();
  console.log(pathname);
  const linkStyle =
    'rounded-md text-sm px-3 py-1 hover:shadow-md transform hover:-translate-y-1 duration-300 font-bold whitespace-nowrap text-white bg-blue-500';
  return (
    <div className="flex gap-2">
      <Link href={'/signup'} className={linkStyle + ' p-2'}>
        Sign In
      </Link>
      <Link href={'/login'} className={linkStyle}>
        Login
      </Link>
    </div>
  );
};

export default CallToAction;
