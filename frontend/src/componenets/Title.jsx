import React from 'react';

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex flex-col items-center gap-5 mb-12">
      <p className="text-2xl sm:text-4xl font-medium text-gray-600 text-center">
        {text1}{' '}
        <span className="text-gray-900 font-bold">{text2}</span>
      </p>
      <div className="flex items-center gap-4">
        <div className="h-[2px] w-20 sm:w-32 bg-gray-400"></div>
        <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-600 rounded-full"></div>
        <div className="h-[2px] w-20 sm:w-32 bg-gray-400"></div>
      </div>
    </div>
  );
};

export default Title;
