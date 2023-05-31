'use client';
import Header from '@/app/components/checkoutSection/CheckoutHeader';

import CheckoutSummary from '@/app/components/checkoutSection/CourseSummary';
import CheckoutPage1 from '@/app/components/checkoutSection/Payment1';
import CheckoutForm from '@/app/components/checkoutSection/PaymentSection';
import { userContext } from '@/app/layout';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react';

const page = () => {
  const router = useRouter();
  const { user } = useContext(userContext);
  if (!user._id) {
    router.push('/login');
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

export default page;
