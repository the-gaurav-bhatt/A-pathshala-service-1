import Image from 'next/image';
import React from 'react';

const AplusLogo = () => {
  return (
    <div className="flex text-3xl font-bold items-center justify-center">
      <Image
        src={'/logo.png'}
        width={150}
        height={150}
        className="lg:w-12 lg:h-12 w-10 h-10"
      ></Image>
      Pathshala
    </div>
  );
};

export default AplusLogo;
