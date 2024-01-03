'use client';
import { userContext } from '@/app/userProvider';
import React from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
import CoursesTable from '@/app/components/dashboard/CourseTable';
const Page = () => {
  const { user } = useContext(userContext);
  const router = useRouter();
  if (!user?._id) {
    return (
      <>
        <div className="flex h-screen flex-col flex-grow">
          <div className="py-10">
            <div className="text-2xl font-bold ps-8">
              Please Login to view your dashboard
            </div>
          </div>
        </div>
      </>
    );
  }
  const handleEnroll = () => {
    router.push('/account-profile/purchase');
  };
  const handleJoinSession = (id) => {
    // router.push(`account-profile/join-session/${id}`);
    console.log('join session');
  };
  const enrolledCourses = [
    {
      id: 1,
      name: '15 Day Bootcamp on Tech Industry',
      instructor: 'Beginner to Intermediate',
      image: '/banner.png',
      upcomingSession: 'June 15th, 2023 - 08:00 PM',
    },
  ];

  return (
    <div className="flex flex-col flex-grow">
      <div className="py-10">
        <div className="text-2xl  ps-8">
          Welcome Back <span className="font-bold">{user?.name} </span>
        </div>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-xl font-semibold text-center mb-10">
            YOUR DASHBOARD
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-bold mb-4">A+ SCORE</p>
              <div className="flex items-center justify-center">
                <p className="text-4xl font-bold text-blue-500">
                  {' '}
                  {user.haveEnrolled ? '10' : '0'}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-bold mb-4">ENROLLED COURSES</p>
              <div className="flex items-center justify-center">
                <p className="text-4xl font-bold text-blue-500">
                  {user.haveEnrolled ? '1' : '0'}
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-lg font-bold mb-4 whitespace-nowrap">
                COURSES COMPLETED
              </p>
              <div className="flex items-center justify-center">
                <p className="text-4xl font-bold text-blue-500">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg min-h-screen  shadow-lg m-6">
        <CoursesTable />
      </div>
    </div>
  );
};

export default Page;
// lets make a dashboard that has 3 modern and catchy boxes with A+ Score, Enrolled Courses and Course Completed
