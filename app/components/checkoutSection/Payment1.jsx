'use client';
import { userContext } from '@/app/userProvider';
import { cookieContext } from '@/app/cookieProviders';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import BounceSpinners from '../spinners/BounceSpinners';
import ErrorMessage from '../spinners/ErrorMessage';

const CheckoutPage1 = () => {
  const { cookie } = useContext(cookieContext);
  const { setUser } = useContext(userContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [formdata, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    referalCode: '',
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
    console.log(cookie);
    e.preventDefault();
    formData.append('name', formdata.name);
    formData.append('email', formdata.email);
    formData.append('contact', formdata.phone);
    formData.append('referalCode', formdata.referalCode);
    formData.append('binary', image);
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_PAYMENT,
        formData,
        {
          headers: {
            Authorization: cookie,
          },
        }
      );
      // const data = await res.json();
      // console.log(data);
      if (res.status === 200) {
        // console.log(res.data.userProfile);
        setIsSubmitting(false);
        setSuccess(true);
        setUser(res.data.userProfile);
      } else {
        setIsSubmitting(false);
        throw new Error(res.data);
      }
    } catch (err) {
      setIsSubmitting(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
      console.log(err);
      setIsSubmitting(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Payment Information</h1>

      {error && (
        <ErrorMessage
          message={'Something Went Wrong ! Please try again later.'}
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
              <label className="block font-bold mb-2" htmlFor="referalCode">
                Referal Code
              </label>
              <input
                className="w-full px-4 py-2 border rounded-lg"
                type="text"
                id="referalCode"
                name="referalCode"
                value={formdata.referalCode}
                onChange={handleInputChange}
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
              <p className="text-black">9861875076</p>
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
                <p className="text-black">9861875076</p>
              </div>
              <div>
                <p className="font-bold">Name:</p>
                <p className="text-black">Sajan Ghimire</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg lg:p-6 md:p-2 text-black">
            <h2 className="text-lg font-bold mb-4">Bank A/C Details</h2>
            <div className="mb-4">
              <p className="font-bold">Account No:</p>
              <p className="text-black"> 08410017502908</p>
            </div>
            <div className="mb-4">
              <p className="font-bold">Account Name:</p>
              <p className="text-black">Sajan Ghimire</p>
            </div>
            <div>
              <p className="font-bold">Bank:</p>
              <p className="text-black">Nabil Bank</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage1;
