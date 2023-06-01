import React from 'react';
import SideBar from '../components/profileSection/SideBar';
const layout = ({ children }) => {
  return (
    <section className="flex  ">
      <SideBar />

      <div className="bg-blue-50 flex-grow">{children}</div>
    </section>
  );
};

export default layout;
