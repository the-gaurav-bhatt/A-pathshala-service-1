'use client';
import { cookieContext, userContext } from '@/app/layout';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import BounceSpinners from '../spinners/BounceSpinners';
import SuccessMessage from '../spinners/SuccessMessage';
import ErrorMessage from '../spinners/ErrorMessage';

const CheckoutPage1 = () => {
  const { cookie } = useContext(cookieContext);
  const { setUser } = useContext(userContext);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [image, setImage] = useState(null);
  let formData = new FormData();
  const handleInputChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const hanldeImage = (e) => {
    setImage(e.target.files[0]);
    // console.log(formData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    formData.append('name', formdata.name);
    formData.append('email', formdata.email);
    formData.append('contact', formdata.phone);
    formData.append('binary', image);
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        'https://a-pathshala-service-2.onrender.com/api/v1/user/verifyPayment',
        formData,
        {
          headers: {
            Authorization: cookie,
          },
        }
      );

      console.log(res.data.userProfile);
      if (res.status === 200) {
        setUser(res.data.userProfile);
        console.log(res.data.userProfile);
        setIsSubmitting(false);
        setSuccess(true);

        setTimeout(() => {
          setSuccess(false);
        }, 5000);
      } else {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
        setIsSubmitting(false);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      console.log(err);
      setIsSubmitting(false);
    }
    // Perform any necessary actions with the form data
    // For example, send it to your server for processing
    setPaymentCompleted(true);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Payment Information</h1>
      {success && (
        <SuccessMessage
          message={'Your Reciept Is under Review. We will Get Back to You Soon'}
        />
      )}{' '}
      {error && (
        <ErrorMessage
          message={'Your Reciept Is under Review. We will Get Back to You Soon'}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div className="bg-white md:col-span-2 rounded-lg p-6 text-gray-900">
          <form
            className="mt-6"
            onSubmit={handleFormSubmit}
            datatype="form-data"
            encType="multipart/form-data"
          >
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg"
                type="text"
                id="name"
                name="name"
                value={formdata.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg"
                type="email"
                id="email"
                name="email"
                value={formdata.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg"
                type="tel"
                id="phone"
                name="phone"
                value={formdata.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="receiptImage">
                Receipt Image
              </label>
              <input
                className="w-full"
                required
                type="file"
                multiple={false}
                id="receiptImage"
                name="receiptImage"
                accept="image/*"
                onChange={hanldeImage}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              {isSubmitting ? <BounceSpinners /> : ' Complete Payment'}
            </button>
          </form>
        </div>

        <div className="col-span-1 md:col-span-2 md:flex grid grid-cols-1">
          <div className="bg-white rounded-lg p-6 text-black">
            <img src="/khalti.svg" className="flex w-14" alt="" />
            <h2 className="text-lg font-bold mb-4">Khalti Transfer</h2>
            <div className="mb-4">
              <p className="font-bold">Khalti ID:</p>
              <p className="text-black">9843418369</p>
            </div>
            <div>
              <p className="font-bold">Name:</p>
              <p className="text-black">Sajan Ghimire</p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 grid grid-cols-1">
            <div className="bg-white rounded-lg p-6 text-gray-900">
              <img
                src="/esewa_logo.png"
                className="flex bg-blue-600 rounded-md px-2 py-1 h-6"
                alt=""
              />
              <h2 className="text-lg font-bold mb-4">Esewa Transfer</h2>
              <div className="mb-4">
                <p className="font-bold">eSewa ID:</p>
                <p className="text-black">9894348324</p>
              </div>
              <div>
                <p className="font-bold">Name:</p>
                <p className="text-black">A+ Pathshala</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg lg:p-6 md:p-2 text-black">
            <h2 className="text-lg font-bold mb-4">Bank A/C Details</h2>
            <div className="mb-4">
              <p className="font-bold">Account No:</p>
              <p className="text-black">02301020303456</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Account Name:</p>
              <p className="text-black">A+ Pathshala</p>
            </div>
            <div>
              <p className="font-bold">Bank:</p>
              <p className="text-black">Nepal Rastriya Bank, New Road</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage1;
