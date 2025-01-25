import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${id}`} className="block">
        <div className="relative w-full h-64 flex items-center justify-center bg-white">
          <img
            src={image[0]}
            alt={name}
            className="max-w-full max-h-full object-contain"
          />

          <div 
            className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 
            flex items-center justify-center transition-all duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          >
            <button 
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
            >
              Order Now
            </button>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 break-words w-full">{name}</h3>
          <span className="text-xl font-bold text-red-600">{currency}{price.toFixed(2)}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;