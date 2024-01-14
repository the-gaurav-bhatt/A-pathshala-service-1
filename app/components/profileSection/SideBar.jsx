'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { userContext } from '@/app/userProvider';
import { useContext } from 'react';
import { FiSettings, FiActivity, FiMonitor, FiLogOut } from 'react-icons/fi';
const SideBar = () => {
  const { setUser } = useContext(userContext);
  const router = useRouter();
  const currRoute = usePathname();
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
        router.push('/');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const selected =
    'text-blue-500 bg-slate-50 px-2 rounded-s-full text-sm font-bold';
  const others = 'hover:rounded-s-full text-black px-2 text-sm font-bold';

  return (
    <aside className="bg-white border-e hidden md:flex  text-black h-screen min-w-[20%]  flex-col">
      {
        <div className="flex flex-col gap-3 ps-4 pt-8">
          {
            <>
              <Link
                href="/account-profile/dashboard"
                className={`${
                  currRoute === '/account-profile/dashboard' ? selected : others
                } mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2 font-bold hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-blue-600`}
              >
                <FiActivity className=" text-xl me-3 text-blue-400" />
                Dashboard
              </Link>

              <Link
                href="/account-profile/purchase"
                className={`${
                  currRoute === '/account-profile/purchase' ? selected : others
                }  mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2 font-bold hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-blue-600`}
              >
                <FiMonitor className=" text-xl me-3 text-blue-400" />
                Buy Course
              </Link>

              <button>
                <a
                  href="/account-profile/profile"
                  className={`${
                    currRoute === '/account-profile/profile' ? selected : others
                  }  mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2  font-bold hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-blue-600`}
                >
                  <FiSettings className=" text-xl me-3 text-blue-400" />
                  Profile
                </a>
              </button>

              <button
                onClick={handleLogout}
                className={`${
                  currRoute === '/account-profile/logout' ? selected : others
                } mt-1 flex pe-2 sm:mt-0 sm:ml-3 px-3 py-2 font-bold hover:bg-gray-200 focus:outline-none focus:bg-slate-100 focus:text-blue-600`}
              >
                <FiLogOut className=" text-xl me-3 text-blue-400" />
                Logout
              </button>
            </>
          }
        </div>
      }
    </aside>
  );
};

export default SideBar;
