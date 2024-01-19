import React, { useContext } from 'react';
import { userContext } from '@/app/userProvider';
import Image from 'next/image';
export const result = Math.random().toString(36).substring(2, 7);
const Profile = ({ data }) => {
  const { user } = useContext(userContext);
  console.log(user);
  return (
    <div className="flex flex-grow justify-end">
      {
        <img
          src={
            user.profilePicture ||
            `https://api.multiavatar.com/${result}.png
          `
          }
          width={39}
          height={39}
          className=" rounded-full mr-2"
          alt="Profile"
        />
      }
    </div>
  );
};

export default Profile;
