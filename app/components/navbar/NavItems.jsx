import React from 'react';
import NavLink from './NavLink';
const NavItems = () => {
  return (
    <div className=" justify-between sm:hidden lg:flex  items-center">
      <NavLink href={'/courses'} label={'Courses'} />
      <NavLink href={'/contact'} label={'Contact'} />
    </div>
  );
};

export default NavItems;
