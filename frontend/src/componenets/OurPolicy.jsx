import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='px-6 sm:px-12 lg:px-20'> {/* Added padding */}
      <div className='flex flex-col sm:flex-row justify-between gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
        {/* Best Customer Support */}
        <div className='flex flex-col items-center'>
          <img src={assets.support_img} className='w-12 mb-5' alt="Best Customer Support" />
          <p className='font-semibold'>Best Customer Support</p>
          <p className='text-gray-400'>We provide excellent customer support</p>
        </div>

        {/* Fast Delivery */}
        <div className='flex flex-col items-center'>
          <img src={assets.del} className='w-12 mb-5' alt="Fast Delivery" />
          <p className='font-semibold'>Fast Delivery</p>
          <p className='text-gray-400'>Quick and reliable delivery service</p>
        </div>

        {/* Affordable Pricing */}
        <div className='flex flex-col items-center'>
          <img src={assets.pri} className='w-12 mb-5' alt="Affordable Pricing" />
          <p className='font-semibold'>Affordable Pricing</p>
          <p className='text-gray-400'>Best prices for top-quality products</p>
        </div>
      </div>
    </div>
  );
}

export default OurPolicy;
