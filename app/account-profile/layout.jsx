'use client';
import React from 'react';
import SideBar from '../components/profileSection/SideBar';
import { useContext } from 'react';
import { userContext } from '../layout';
const Layout = ({ children }) => {
  const { user } = useContext(userContext);
  if (!user?._id) {
    return (
      <>
        <div className="flex  min-h-screen justify-center items-center">
          <div className="py-10">
            <div className="text-2xl font-bold ps-8">
              Please Login to view your dashboard
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <section className="flex  ">
        <SideBar />

        <div className="bg-blue-50 flex-grow">{children}</div>
      </section>
    );
  }
};

export default Layout;
