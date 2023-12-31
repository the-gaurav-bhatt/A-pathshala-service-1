'use client';
import { useState } from 'react';

const CheckoutSummary = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      title: '15 Day Bootcamp on Tech Industry - From Beginner to Intermediate',
      instructor: 'Beginner to Intermediate',
      image: '/banner.png',
      price: 650,
    },
  ]);
  const handleRemove = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };
  const getTotalPrice = () => items.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="border-b lg:mx-8 md:mx-4 w-full lg:w-1/2 flex items-center justify-center  border-gray-200">
      <div className="lg:container mx-auto  py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-800">Order Summary</h2>
        </div>
        <div
          className={` mt-4 border px-2  md:w-1/2 md:px-2 bg-white shadow-md `}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex py-3 justify-around  items-center mb-2"
            >
              <div className=" space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-fit object-cover rounded"
                />
                <div>
                  <h3 className="text-gray-800 font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.instructor}</p>
                </div>
              </div>

              {/* <button
                onClick={() => handleRemove(item.id)}
                className="font-bold  text-3xl text-red-600"
              >
                -
              </button> */}
            </div>
          ))}
          <div className="flex justify-around items-center mt-4">
            <h3 className="text-gray-800 font-semibold">Total:</h3>
            <p className="text-gray-800 font-semibold">
              Rs {getTotalPrice().toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
