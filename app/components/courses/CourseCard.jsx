import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Source_Sans_Pro, Sora } from 'next/font/google';
const ssp = Source_Sans_Pro({
  weight: ['600'],
  subsets: ['cyrillic'],
});
const sora = Sora({
  weight: 'variable',
  subsets: ['latin'],
});

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-purple-200 rounded-lg shadow-lg w-full md:w-1/2   overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={course.image}
        alt={course.title}
        className="border border-blue-50 pt-2 rounded-xl px-1 object-cover w-full"
      />
      <div className="p-2">
        <div className="flex justify-between">
          <div className="text-sm text-neutral-500">{'Technology'}</div>
          <div className="h-6 flex items-center justify-center">
            <p
              className={
                'bg-blue-600 text-white px-3 whitespace-nowrap rounded-xl'
              }
            >
              New
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-lg line-clamp-2 text-neutral-900 mb-4">
            {course.title}
          </h2>
        </div>
        <div className="flex justify-between items-center">
          {/* <p className="text-black flex items-center">
            <Image src={'/star.svg'} height={20} width={20} alt="stars" />
            {4.5}
            <span className="text-neutral-500">
              {`(${course.totalStudent ? course.totalStudent : '1000'})`}
            </span>
          </p> */}
          <div className="text-black font-bold whitespace-nowrap text-lg">
            Rs {course.price}
          </div>
        </div>
        <div className="flex justify-center gap-4">
          <Link
            href={'/courses/1'}
            className="inline-block whitespace-nowrap bg-green-500 hover:bg-green-600 text-white text-sm font-semibold py-2 px-4 mt-4 rounded transition duration-200"
          >
            View Course
          </Link>

          <Link
            href={'/account-profile/purchase'}
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-semibold py-2 px-4 mt-4 rounded transition duration-200"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

// MIGHT BE THIS

// import React from 'react';

// const CourseCard = ({ course }) => {
//   return (
//     <div>
//       <h2>{course.title}</h2>
//       <p>{course.description}</p>
//       <a href={course.url}>Enroll now</a>
//     </div>
//   );
// };

// export default CourseCard;
