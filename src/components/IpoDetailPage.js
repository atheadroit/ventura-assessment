import React, { useState } from 'react';
import logo7 from './assets/oyo-logo.png';

const IpoDetailPage = () => {
  // Stepper state for current step
  const [currentStep, setCurrentStep] = useState(1);

  // Steps data
  const steps = [
    { label: 'Bidding starts', date: '12 Dec 2023' },
    { label: 'Bidding ends', date: '15 Dec 2023' },
    { label: 'Allotment finalization', date: '18 Dec 2023' },
    { label: 'Refund initiation', date: '18 Dec 2023' },
    { label: 'Demat transfer', date: '18 Dec 2023' },
    { label: 'Listing date', date: '21 Dec 2023' },
  ];

  // Handle apply button click
  const handleApply = () => {
    window.open('/ipolistpage', '_blank'); // Open in a new tab
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-20">
      {/* Header */}
      <div className="flex items-center justify-between bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center">
          <img
            src={logo7}
            alt="OYO Logo"
            className="h-10 w-10 rounded-full"
          />
          <div className="ml-4">
            <h1 className="text-lg font-semibold">OYO Private Limited</h1>
          </div>
        </div>
        <button
          onClick={handleApply}
          className="bg-indigo-600 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-indigo-700"
        >
          Apply now
        </button>
      </div>

      {/* IPO Timeline Form Stepper */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">IPO timeline</h2>

        {/* Stepper Container */}
        <div className="relative flex justify-between items-center">
          {/* Line Connecting Steps */}
          <div className="absolute top-[24%] mr-[260px] left-0 w-full h-1 bg-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center">
              {/* Step Circle or Checkmark */}
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentStep >= index + 1 ? 'bg-green-500' : 'bg-gray-300'
                } text-white`}
              >
                {currentStep >= index + 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-5 w-5 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <span className="text-white">{index + 1}</span>
                )}
              </div>

              {/* Step Label and Date */}
              <p className="text-sm mt-2 text-center">{step.label}</p>
              <p className="text-sm font-semibold text-gray-500">{step.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* About the Company */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">About the company</h2>
        <p className="text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec felis
          lectus. Nam lacinia vulputate nibh. Integer vitae euismod nulla. Curabitur
          gravida, ligula nec pharetra vehicula, ante nulla posuere lorem, a placerat
          leo sapien ut elit. Ut eget erat urna. Aenean gravida, odio non tempus
          commodo, velit risus cursus purus, at ultricies libero nunc id ex.
        </p>
      </div>
    </div>
  );
};

export default IpoDetailPage;
