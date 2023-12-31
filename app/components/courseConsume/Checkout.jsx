'use client';
import React from 'react';
import YouTubeVideo from '../youtubeEmbed/YoutubeVideo';
import { useRouter } from 'next/navigation';

const Checkout = ({ course }) => {
  const router = useRouter();

  const handleBuyNow = () => {
    router.push('/account-profile/purchase');
  };
  return (
    <div className="bg-color-3-100  mb-4">
      <div className="mb-8 w-full border rounded-sm">
        {/* <video className=" rounded-md " width={640} height={360} controls>
          <source src="/video.mp4" type="video/mp4" />
        </video> */}
      </div>
      <YouTubeVideo videoId={'NE0dWeV5epA'} />
      <div className="rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <span className="text-gray-900 font-medium">{course.teacher}</span>
          </div>
          {/* <button classNameName=" bg-blue-200 py-1 px-3 rounded-lg text-blue-600">
            Follow
          </button> */}
        </div>
        <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            {course.name}
          </span>
          <span className="text-sm font-medium text-gray-700">
            {course.rating}
          </span>
        </div>
        <div className="px-4 py-2 border-t border-gray-200 flex items-center justify-between">
          <span className="text-sm text-gray-600">Total</span>
          <span className="text-sm font-medium text-gray-900">
            {course.price}
          </span>
        </div>
        <div className="px-4 py-2">
          <button
            onClick={handleBuyNow}
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg mb-2"
          >
            Buy Now
          </button>
          {/* <button className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-lg">
            Add To Cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
