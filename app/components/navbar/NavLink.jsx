'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ href, label, disable }) {
  const selected = 'text-blue-500';
  const others = 'hover:text-gray-900 px-2 rounded-md text-sm font-bold';

  const currRoute = usePathname();

  return (
    <>
      <button
        className={` relative px-2 ${
          disable ? ' hidden md:flex cursor-not-allowed ' : ' '
        } `}
      >
        <Link
          href={href}
          className={` ${currRoute === href ? selected : others}${
            disable ? ' cursor-not-allowed  ' : ' '
          } hover:border-b-4 pb-1 hover:text-blue-500 hover:rounded-sm hover:border-blue-500`}
        >
          {label}
        </Link>
        {disable && (
          <span className="absolute whitespace-nowrap -top-2.5 -right-2.5 inline-flex items-center justify-center gap-1 rounded-md bg-pink-200 px-1.5 text-xs text-black">
            Soon
          </span>
        )}
        {currRoute == href && (
          <div className="absolute inset-x-0 -bottom-1 h-1 mt-2 pb-1 rounded-sm bg-blue-500"></div>
        )}
      </button>
    </>
  );
}

export default NavLink;
