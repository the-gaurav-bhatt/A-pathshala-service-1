import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BounceSpinners from '../spinners/BounceSpinners';
const OptInterface = ({ emal, setOtpInterface, setForgetPassword }) => {
  const router = useRouter();
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState(emal);
  const [loading, setLoading] = useState(false);
  const [passLoading, setPassLoading] = useState(false);
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleCloseClick = () => {
    router.back();
  };
  const handlePasswordSubmit = async () => {
    setPassLoading(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_RESETPASSWORD,
        {
          method: 'POST',
          body: JSON.stringify({
            email,
            password: newPassword,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();
      if (data.status === 'success') {
        console.log('Success on Changing Password');
        setPassLoading(false);
        setOtpInterface(false);
        setForgetPassword(false);
        router.push('/login');
      } else {
        throw new Error(data);
      }
    } catch (error) {
      setPassLoading(false);
      console.log(error);
    }
  };
  const handleVerify = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_VERIFYTOKEN,

        {
          method: 'POST',
          body: JSON.stringify({
            email,
            token: otp,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await res.json();

      if (data.status === 'success') {
        setError(false);
        setVerified(true);
        setLoading(false);
      } else {
        throw new Error(data);
      }
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div className="  bg-blue-200 inset-0 h-screen bg-opacity-50 flex items-center justify-center">
      <div className="bg-white  min-w-fit sm:w-1/2 md:w-1/2 lg:w-1/3 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Reset Password </h2>
          <button
            aria-label="Close"
            onClick={handleCloseClick}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-x-circle"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
          </button>
        </div>
        {!verified && (
          <div className="text-gray-700 mb-4">
            <h2 className=" font-bold p-2 ">
              {' '}
              Enter the OTP sent to your email
            </h2>
            {error && <p className="text-red-500 p-2 text-sm">Invalid OTP</p>}
            <div className="flex items-center justify-around">
              <input
                className="border-2 border-gray-300 p-2 w-fit"
                type="number"
                maxLength={4}
                placeholder="Enter OTP"
                onChange={(e) => setOtp(e.target.value)}
              />
              <button
                onClick={handleVerify}
                className="text-blue-500 ms-2 hover:text-blue-700 bg-gray-300 hover:bg-gray-400 rounded-md px-2 py-1"
              >
                {loading ? <BounceSpinners /> : ' Verify'}
              </button>
            </div>
          </div>
        )}
        {verified && (
          <div className="text-gray-700 mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              {' '}
              New Password
            </label>
            <input
              className="border-2 border-gray-300 p-2 w-fit"
              type="password"
              value={newPassword}
              placeholder="Enter New Password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button
              onClick={handlePasswordSubmit}
              className="text-blue-500 ms-2 hover:text-blue-700 bg-gray-300 hover:bg-gray-400 rounded-md px-2 py-1"
            >
              {passLoading ? <BounceSpinners /> : ' Submit'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OptInterface;
