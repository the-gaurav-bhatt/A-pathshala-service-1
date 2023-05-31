'use client';
import React from 'react';
import SideBar from '../components/profileSection/SideBar';
import { useState } from 'react';
const layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <section className="flex  ">
      <SideBar />

      <div className="bg-slate-50 flex-grow">{children}</div>
    </section>
  );
};

export default layout;
