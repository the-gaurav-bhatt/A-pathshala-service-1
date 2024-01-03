'use client';
import { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import GoogleSvg from '../spinners/GoogleSvg';
import { userContext } from '@/app/userProvider';
import BounceSpinners from '../spinners/BounceSpinners';
const Signup = () => {
  const [name, setName] = useState('');
  const { setUser } = useContext(userContext);
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(
        process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_SIGNUP,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',

          body: JSON.stringify({ name, email, password, role }),
        }
      )
        .then(async (res) => {
          // console.log(await res.json());
          return res;
        })
        .then(async (data) => {
          // console.log(data);
          const newData = await data.json();
          if (newData.success) {
            setLoading(false);

            console.log(newData.userProfile);
            setUser(newData.userProfile);
            router.back();
          } else {
            setLoading(false);
            setError(true);
            // throw new Error(data);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGoogle = async () => {
    router.push(
      process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_GOOGLE
    );
  };

  const handleClick = () => {
    router.push('/');
  };

  const handleUsernameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isEmailValid = () => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return emailRegex.test(email);
  };

  const isPasswordValid = () => {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit

    const passwordRegex =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;
    return passwordRegex.test(password);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex  items-center justify-center">
      <div className="bg-white w-full sm:w-1/2 md:w-1/2 lg:w-1/3 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
          <button
            aria-label="Close"
            onClick={handleClick}
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
        <div className="text-gray-700 mb-4">
          Already have an account?{' '}
          <Link href="/login" className="text-green-500 hover:text-green-700">
            Log in here
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="font-light">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="border border-gray-400 rounded-lg p-2 w-full"
              id="username"
              name="username"
              type="text"
              required
              value={name}
              onChange={handleUsernameChange}
            />
            <div className="border px-2 inline-flex items-center justify-center ms-6 mt-2 mb-0  rounded">
              <label htmlFor="role">Role:</label>
              <select
                name="role"
                id=""
                className="my-2 border-none ps-2"
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="student">User</option>
                <option value="teacher">Teacher</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className={`border border-gray-400 rounded-lg p-2 w-full ${
                email && !isEmailValid() ? 'border-red-500' : ''
              }`}
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
            {email && !isEmailValid() && (
              <p className="text-red-500 mt-1">Invalid email address</p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`border border-gray-400 p-2 rounded-lg w-full ${
                password && !isPasswordValid() ? 'border-red-500' : ''
              }`}
              id="password"
              name="password"
              type="password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {password && !isPasswordValid() && (
              <p>
                <span className="text-red-500 text-sm tracking-tighter leading-3 mt-1">
                  Password must be at least 8 characters long and contain at
                  least one uppercase letter, one lowercase letter, and one
                  digit and one special character
                </span>
              </p>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className={`bg-green-500  hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
              disabled={!isEmailValid() || !isPasswordValid() || loading}
            >
              {loading && (
                <span>
                  <BounceSpinners />
                </span>
              )}
              {!loading && <span>Sign up</span>}
            </button>
          </div>
        </form>
        <span className="text-lg font-bold flex justify-center items-center ">
          Or
        </span>
        <div className="flex mt-2 justify-center gap-2">
          <button
            onClick={handleGoogle}
            disabled={loading}
            className=" bg-white shadow-md border-2 border-solid flex gap-2 justify-items-center items-center text-black md:text-sm whitespace-nowrap font-bold py-2 px-4 rounded mb-4"
          >
            <GoogleSvg />
            <span>Log In with Google</span>
          </button>
          {/* <button
            onClick={handleFaceBook}
            className="bg-blue-500 hover:bg-blue-700 whitespace-nowrap text-white font-bold py-2 px-4 rounded mb-4"
          >
            Log In with Facebook
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
