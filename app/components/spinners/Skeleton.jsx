import React from 'react';
export const SkeletonCard = () => {
  return (
    <>
      <div>
        <div className="flex  h-screen items-center justify-center">
          <div className="w-32 h-32 relative">
            <div className="animate-spin ease-linear rounded-full border-4 border-t-4 border-blue-600 h-24 w-24"></div>
            <div className="w-12 h-12 border-4 top-6 left-6 delay-150 border-primary rounded animate-spin absolute inset-0"></div>
          </div>
        </div>
      </div>
    </>
  );
};
