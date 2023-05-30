import Header from '@/app/components/checkoutSection/CheckoutHeader';
import CheckoutSummary from '@/app/components/checkoutSection/CourseSummary';
import CheckoutForm from '@/app/components/checkoutSection/PaymentSection';
import React from 'react';

const page = () => {
  return (
    <div className="grid grid-cols-2 md:px-4 lg:px-8 gap-x-2  ">
      <CheckoutSummary />
      <CheckoutForm />{' '}
    </div>
  );
};

export default page;
