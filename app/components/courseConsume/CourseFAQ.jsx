'use client';
import React, { useState } from 'react';

const CourseFAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      question: 'What is the eligibility criteria to join A+ Pathshala',
      answer:
        'A+ Pathshala is open to individuals of all backgrounds and experience levels. There are no specific eligibility criteria, making it accessible to beginners as well as those with prior coding knowledge.',
    },
    {
      question:
        'Can I participate in A+ Pathshala remotely or do I need to be physically present?',
      answer:
        'Currently we are offering only online courses. We will be offering offline courses in the near future.',
    },
    {
      question:
        'Are there any job placement opportunities after completing the A+ Pathshala program?',
      answer:
        'A+ Pathshala gurantess 100% job placement based on the A+ Score You Have. More detail can be found in the A+ Score section.',
    },
  ];

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-4">
        {accordionData.map((item, index) => (
          <div key={index} className={` border-b rounded overflow-hidden `}>
            <button
              className="flex items-center justify-between px-4 py-3 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
              </div>
              <div>
                <svg
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    activeAccordion === index ? 'transform rotate-180' : ''
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>
            {activeAccordion === index && (
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-600">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseFAQ;
