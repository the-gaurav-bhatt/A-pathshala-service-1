'use client';
import React, { useContext, useReducer } from 'react';
import { motion } from 'framer-motion';
import { userContext } from '@/app/userProvider';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_EMAIL':
      return { ...state, email: action.payload };
    case 'SET_ADDRESS':
      return { ...state, address: action.payload };
    case 'SET_CONTACT':
      return { ...state, contact: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

const PersonalInformation = ({ userProfile }) => {
  const initialState = {
    _id: userProfile._id,
    name: userProfile.name || '',
    email: userProfile.email || '',
    address: userProfile.address || '',
    contact: userProfile.contact || '',
    password: '',
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const { setUser } = useContext(userContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
  };

  const handleProfileUpdate = async (event) => {
    event.preventDefault();
    console.log(state);
    const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND + process.env.NEXT_PUBLIC_UPDATEPROFILE,
      {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({
          state,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (res.json().success) {
      setUser(state);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 p-6 rounded shadow"
    >
      <h2 className="text-3xl font-bold mb-4">Personal Information</h2>
      <form onSubmit={handleProfileUpdate}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={state.name}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={state.email}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="address"
          >
            Shipping Address
          </label>
          <textarea
            id="address"
            name="address"
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={state.address}
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="contact"
          >
            Contact Information
          </label>
          <input
            type="tel"
            id="contact"
            name="contact"
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={state.contact}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="password"
          >
            Update Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={state.password}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
        >
          Update Information
        </button>
      </form>
    </motion.div>
  );
};

export default PersonalInformation;
