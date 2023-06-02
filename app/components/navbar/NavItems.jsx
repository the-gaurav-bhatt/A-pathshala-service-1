import React from 'react';
import NavLink from './NavLink';
const NavItems = () => {
  return (
    <div className=" justify-between sm:hidden lg:flex  items-center">
      <NavLink href={'/aplus-score'} label={'A+ Score'} />
      <NavLink
        href={'/account-profile/mycourses'}
        disable={false}
        label={'My Courses'}
      />
      <NavLink href={'/#'} disable={true} label={'A+ Community'} />
      <NavLink href={'/contact'} disable={false} label={'Contact'} />
    </div>
  );
};

export default NavItems;
