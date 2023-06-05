import Link from 'next/link';
import React from 'react';

const Hero1 = () => {
  return (
    <div>
      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
        >
          <div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] "></div>
          <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] "></div>
        </div>

        <div className="relative z-10">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent ">
                A+ Pathshala: A vision for 2023
              </p>

              <div className="mt-5 max-w-2xl">
                <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl ">
                  Bridging the gap between Global Tech Industry and Nepal
                </h1>
              </div>

              <div className="mt-5 max-w-3xl">
                <p className="text-lg  text-gray-600 ">
                  From Beginner, till You land your first Dream Job, Join us In
                  the Journey of Change. Learn from the Industry Experts and
                  Let&apos;s change the trend of going Australia to wash dish
                  instead earn equal or more by joing A+ pathshala. We provide
                  you the best learning experience with the best teachers and
                  mentors.
                </p>
              </div>

              <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                <Link
                  href="#upcoming-courses"
                  className="inline-flex scroll-smooth justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 "
                >
                  Get started
                  <svg
                    className="w-3 h-3"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
