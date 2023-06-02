import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/4 md:w-1/2 px-4">
            <h2 className="text-lg text-white font-semibold mb-4">About Us</h2>
            <p className="text-gray-200 text-sm">
              A team With a vision to bring big tech giants in Nepal
            </p>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 px-4">
            <h2 className="text-lg text-white font-semibold mb-4">Courses</h2>
            <ul className="list-none">
              <li>
                <Link
                  href="/courses/1"
                  className="text-gray-200 hover:text-white"
                >
                  15 Day Bootcamp
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 px-4">
            <h2 className="text-lg text-white font-semibold mb-4">Contact</h2>
            <p className="text-gray-200">Koteshwar, Kathmandu, Nepal</p>
            <p className="text-gray-200">Email: apluspathshala@gmail.com</p>
            <p className="text-gray-200">Phone: 9861875076</p>
            <p className="text-gray-200">Phone: 9746660482</p>
          </div>
          <div className="w-full lg:w-1/4 md:w-1/2 px-4">
            <h2 className="text-lg text-white font-semibold mb-4">
              Social Media
            </h2>
            <div className="flex space-x-4">
              <Link
                target="_blank"
                href="https://youtube.com/@APlusPathshala"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  viewBox="0 -7 48 48"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g fill="#CE1312" transform="translate(-200 -368)">
                      <path d="M219.044 391.27l-.002-13.582 12.97 6.814-12.968 6.768zm28.476-15.936s-.47-3.33-1.908-4.798c-1.826-1.926-3.871-1.935-4.809-2.047-6.717-.489-16.792-.489-16.792-.489h-.022s-10.075 0-16.792.49c-.939.111-2.983.12-4.81 2.046-1.439 1.467-1.907 4.798-1.907 4.798s-.48 3.913-.48 7.824v3.668c0 3.912.48 7.823.48 7.823s.468 3.331 1.907 4.798c1.827 1.926 4.225 1.866 5.293 2.067 3.84.371 16.32.486 16.32.486s10.086-.015 16.803-.505c.938-.113 2.983-.122 4.809-2.048 1.439-1.467 1.908-4.798 1.908-4.798s.48-3.91.48-7.823v-3.668c0-3.911-.48-7.824-.48-7.824z"></path>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link href="#" className="text-gray-200 hover:text-white">
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000"
                    fillRule="evenodd"
                    d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 006.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.013-.662.788-.013 1.35.725 1.538 1.025.9 1.512 2.338 1.087 2.912.825.088-.65.35-1.087.638-1.337-2.225-.25-4.55-1.113-4.55-4.938 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 012.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.016 10.016 0 0022 12c0-5.525-4.475-10-10-10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://twitter.com/apluspathshala?t=ZimoXW8ldcF2rKxgYUOTSg&s=09"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  viewBox="0 -4 48 48"
                >
                  <g
                    fill="none"
                    fillRule="evenodd"
                    stroke="none"
                    strokeWidth="1"
                  >
                    <g fill="#00AAEC" transform="translate(-300 -164)">
                      <path d="M348 168.735a19.235 19.235 0 01-5.655 1.59 10.076 10.076 0 004.33-5.585 19.395 19.395 0 01-6.257 2.447c-1.791-1.962-4.352-3.187-7.187-3.187-5.435 0-9.844 4.521-9.844 10.098 0 .791.085 1.56.254 2.3-8.185-.423-15.44-4.438-20.3-10.555a10.281 10.281 0 00-1.332 5.082c0 3.502 1.738 6.593 4.38 8.405a9.668 9.668 0 01-4.462-1.26v.124c0 4.894 3.395 8.977 7.903 9.901a9.39 9.39 0 01-2.595.356c-.634 0-1.254-.061-1.854-.18 1.254 4.01 4.888 6.932 9.199 7.01-3.37 2.71-7.618 4.325-12.23 4.325-.795 0-1.58-.047-2.35-.139 4.359 2.86 9.537 4.533 15.096 4.533 18.115 0 28.019-15.385 28.019-28.73 0-.439-.009-.878-.026-1.308a20.211 20.211 0 004.911-5.227"></path>
                    </g>
                  </g>
                </svg>
              </Link>
              <Link
                href="https://www.facebook.com/apluspathshala?mibextid=ZbWKwL"
                className="text-gray-200 hover:text-white"
              >
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  width="800"
                  height="800"
                  fill="none"
                  viewBox="0 0 32 32"
                >
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    fill="url(#paint0_linear_87_7208)"
                  ></circle>
                  <path
                    fill="#fff"
                    d="M21.214 20.282l.622-3.952h-3.89v-2.563c0-1.081.542-2.136 2.284-2.136H22V8.267S20.395 8 18.86 8c-3.205 0-5.298 1.893-5.298 5.318v3.012H10v3.952h3.562v9.552a14.468 14.468 0 004.383 0v-9.552h3.269z"
                  ></path>
                  <defs>
                    <linearGradient
                      id="paint0_linear_87_7208"
                      x1="16"
                      x2="16"
                      y1="2"
                      y2="29.917"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#18ACFE"></stop>
                      <stop offset="1" stopColor="#0163E0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8">
        <p className="text-center text-gray-200">
          &copy; {new Date().getFullYear()} A+ Pathshala. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
