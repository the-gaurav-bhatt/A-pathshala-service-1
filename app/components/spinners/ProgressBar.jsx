import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="relative h-4  my-2 rounded-full overflow-hidden">
      <div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500"
        style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
      ></div>
      <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
        {progress}%
      </span>
    </div>
  );
};

export default ProgressBar;
