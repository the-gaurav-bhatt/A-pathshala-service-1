'use client';
import { userContext } from '@/app/layout';
import React from 'react';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';
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
      image: '/banner.jpeg',
      upcomingSession: 'June 15th, 2023 - 08:00 PM',
    },
  ];

  const courses = [
    {
      id: 1,
      name: '15 Day Bootcamp on Tech Industry',
      price: 500,
      enrolled: false,
      title: '15 Day Bootcamp on Tech Industry',
      rating: '4.5',
      teacher: 'Dilli Raj',
      image: '/80005460.webp',
      description:
        'This session will be conducted by popular tech personalities from across the globe who proved their worth and showing their amazing skills. do not miss this golden opportunity which is being offered for free.Register now and mark the date as we are just 1 week away from it to happen',
      syllabus: [
        'Introduction to HTML',
        'Introduction to CSS',
        'Introduction to JavaScript',
        'Responsive Web Design',
        'React Basics',
        'Vue Basics',
      ],
      benefits: [
        'Learn the basics of web development',
        'Create responsive web pages',
        'Use popular frameworks like React and Vue',
        'Get a solid foundation for a career in web development',
      ],
    },
  ];
  return (
    <div className="flex flex-col flex-grow">
      <div className="py-10">
        <div className="text-2xl font-bold ps-8">
          Welcome Back {user?.name}{' '}
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
      <div className="">
        {user.haveEnrolled && (
          <div className="my-8">
            <h2 className="text-2xl lg:px-8 font-bold">Enrolled Course</h2>
            <div className="grid gap-4">
              {enrolledCourses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-lg p-4 flex justify-center shadow-lg"
                >
                  <div className="p-2 bg-white shadow-lg rounded-lg">
                    <div className="flex justify-center mb-4">
                      <img
                        src={course.image}
                        alt={course.name}
                        className="object-contain w-full h-52 overflow-clip md:h-64"
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-800">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Instructor: {course.instructor}
                    </p>
                    {course.upcomingSession && (
                      <p className="text-gray-600 mb-4">
                        Upcoming Session: {course.upcomingSession}
                      </p>
                    )}
                    <div className="flex justify-center">
                      <button
                        className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleJoinSession(course.id)}
                      >
                        JOIN SESSION
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {/* <h2 className="text-2xl lg:px-8 font-bold">Available Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white mx-3 px-4 rounded-lgand shadow-lg p-6"
            >
              <h3 className="text-lg font-bold mb-2">{course.name}</h3>
              <p className="text-gray-500 mb-4">Rs {course.price}</p>

              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                onClick={() => handleEnroll(course.id)}
              >
                ENROLL NOW
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Page;
// lets make a dashboard that has 3 modern and catchy boxes with A+ Score, Enrolled Courses and Course Completed
