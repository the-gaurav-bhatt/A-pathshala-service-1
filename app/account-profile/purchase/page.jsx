'use client';

import CheckoutSummary from '@/app/components/checkoutSection/CourseSummary';
import CheckoutPage1 from '@/app/components/checkoutSection/Payment1';
import { userContext } from '@/app/layout';
import ModalActionButton from '@/app/components/spinners/PopupModel';
// import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const Page = () => {
  const { user } = useContext(userContext);
  if (user.haveEnrolled) {
    return (
      <div className=" flex items-center justify-center font-bold text-3xl  ">
        <ModalActionButton
          heading={'Receipt Received'}
          setShowing={true}
          content={`Thank You for your Payment. Your Receipt is user Review.
       Once success You will be able to Enroll In the current
       course . All the information regarding the course will be
       sent to this email. Make sure to check your email for more
       information.For Link for the Courses and all will be sent to you via email.`}
        />
      </div>
    );
  } else {
    return (
      <div className="  ">
        <CheckoutSummary />
        {/* <CheckoutForm />{' '} */}
        <CheckoutPage1 />
      </div>
    );
  }
};

export default Page;
