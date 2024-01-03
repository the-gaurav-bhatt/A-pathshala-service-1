'use client';
import NavItems from './NavItems';
import SearchBar from './SearchBar';
import Logo from './Logo';
import Image from 'next/image';
import CallToAction from './CallToAction';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import Profile from './Profile';
import { useRouter } from 'next/navigation';
import { userContext } from '@/app/userProvider';
import { cookieContext } from '@/app/cookieProviders';

export default function Navbar() {
  const { setUser } = useContext(userContext);
  // console.log(cookie);
  const router = useRouter();
  const [toggleProfile, setToggleProfile] = useState(false);
  const currentUrl = usePathname();
  const { user } = useContext(userContext);
  const { setCookie } = useContext(cookieContext);

  const handleProfileClick = () => {};
  const handleLogout = async () => {
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_LOGOUT,
        {
          credentials: 'include',
        }
      );
      if (res.ok) {
        setUser({});
        setCookie(null);
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex flex-col bg-nav-light-blue-gradient sm:flex-row justify-evenly items-center py-4">
      <Logo />
      {currentUrl != '/courses' && <SearchBar />}
      <Link
        href={'/become-teacher'}
        className="text-3xl bg-sidebar-neutral-gradient px-4 rounded-md shadow-lg whitespace-nowrap font-bold text-blue-500"
      >
        Create Course
      </Link>
      <NavItems />

      {!user?._id && <CallToAction />}

      {user?._id && (
        <div className="relative ">
          <button
            onClick={handleProfileClick}
            // onMouseLeave={() => setToggleProfile(false)}
            onMouseEnter={() => setToggleProfile(true)}
          >
            <Profile />
          </button>
          {toggleProfile ? (
            <div
              className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200"
              onMouseLeave={() => setToggleProfile(false)}
            >
              <button className="flex items-center focus:outline-none">
                {!user?.img ? (
                  <span className="bg-blue-400 text-sm text-white m-2 z-50 flex justify-center items-center h-10 w-10  rounded-full text-center">
                    {user.name.split(' ')[0]}
                  </span>
                ) : (
                  <img
                    src={user.img}
                    width={39}
                    height={39}
                    className=" rounded-full mr-2"
                    alt={`${user.name.split(' ')[0]}`}
                  />
                )}
                <span className="text-gray-700 font-medium">{user.name}</span>
              </button>
              <Link
                href="/account-profile/dashboard"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                View Profile
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                My Cart
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Wishlist
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Saved
              </Link>
              <Link
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                Courses
              </Link>
              {user._id && (
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                >
                  Logout
                </button>
              )}
            </div>
          ) : (
            ''
          )}
        </div>
      )}

      {/* <div className="sm:hidden">
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {/* <HiMenu size={24} /> */}
      {/* </button> */}
      {/* </div> */}
      {/* // {isMobileMenuOpen && <MobileNav />} */}
    </nav>
  );
}
