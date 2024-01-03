'use client';
import React, { useContext } from 'react';
import PersonalInformation from '@/app/components/profileSection/PersonalInformaton';
import { userContext } from '@/app/userProvider';
const Page = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <div>
        <h2>No User Found</h2>
      </div>
    );
  } else
    return (
      <div className="m-6 p-3">
        <PersonalInformation userProfile={user} />
      </div>
    );
};

export default Page;
