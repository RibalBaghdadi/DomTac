import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../componenets/ProductItem';
import Title from '../componenets/Title';
import { Search } from 'lucide-react';

const CategoryPage = () => {
  const { category } = useParams();
  const { products } = useContext(ShopContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Filter products by category and search term
  const categoryProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase() &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="category-page p-10 bg-gray-50">
      {/* Back Button */}
      <button
        onClick={() => navigate('/shop')}
        className="mb-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg shadow-md 
        hover:bg-red-700 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 
        focus:ring-red-500 focus:ring-opacity-50"
      >
        ← Back to Shop
      </button>

      {/* Search Bar */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-2xl">
        <input
            type="text"
            placeholder={`Search in ${category} category...`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-2xl px-6 py-2 text-lg border-2 border-red-500 rounded-full 
            focus:outline-none focus:ring-2 focus:ring-red-700 
            transition duration-300 ease-in-out pr-16"
          />

          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 
          bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
            <Search size={24} />
          </button>
        </div>
      </div>
      {/* Centered Title */}
      <div className="mb-8">
        <Title text1={category} text2={'PRODUCTS'} />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {categoryProducts.length > 0 ? (
        categoryProducts.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No products found in this category
        </div>
      )}
    </div>
    </div>
  );
};

export default CategoryPage;