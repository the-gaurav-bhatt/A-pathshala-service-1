'use client';
import React, { Suspense, useContext } from 'react';
import ProfileSpinner from './components/spinners/ProfileSpinner';
import UpcomingCourses from './components/courses/UpcomingCourses/UpcomingCourses';
import FeatureList from './components/courses/UpcomingCourses/FeaturedList';
import Hero1 from './components/hero/Hero1';
import { userContext } from './layout';
import { useEffect, useState } from 'react';
import SuccessMessage from './components/spinners/SuccessMessage';
export const metadata = {
  title: 'A+ Pathshala',
  description: 'This Platform Empowers Individual Teachers ',
  icons: {
    icon: '/icon.svg',
  },
};
export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);
  const { user } = useContext(userContext);
  useEffect(() => {
    if (user._id) {
      setLoggedIn(true);
      setTimeout(() => {
        setLoggedIn(false);
      }, 3000);
    }
  }, [user]);

  return (
    <Suspense fallback={<ProfileSpinner />}>
      <div className="">
        {loggedIn && (
          <SuccessMessage message="You have successfully Logged in" />
        )}
        <Hero1 />

        <div className="py-2 mb-4 md:mx-12 lg:mx-24">
          {/* <PopularTeachers /> */}
          {/* <PopularCourses /> */}

          <UpcomingCourses />
          <FeatureList />
        </div>
      </div>
    </Suspense>
  );
}
