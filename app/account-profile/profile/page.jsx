'use client';
import React, { useContext } from 'react';
import PersonalInformation from '@/app/components/profileSection/PersonalInformaton';
import { userContext } from '@/app/userProvider';
const page = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return (
      <div>
        <h2>No User Found</h2>
      </div>
    );
  } else
    return (
      <div>
        <PersonalInformation userProfile={user} />
      </div>
    );
};

export default page;
