import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../componenets/ProductItem';
import Title from '../componenets/Title';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Shop = () => {
  const { products, setSearch, search } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Filter products based on search term
    setFilteredProducts(
      products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  // Extract unique categories with their first product image
  const categoriesWithImages = [...new Set(products.map((product) => product.category))]
    .map((category) => {
      const firstProductInCategory = products.find((p) => p.category === category);
      return {
        name: category,
        image: firstProductInCategory.image[0],
      };
    });

  return (
    <div className="p-10 bg-gray-50">
      {/* Enhanced Search Bar */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-2xl">
          <input
            type="text"
            placeholder="Search for products..."
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-2xl px-6 py-2 text-lg border-2 border-red-500 rounded-full 
            focus:outline-none focus:ring-2 focus:ring-red-700 
            transition duration-300 ease-in-out pr-16"
          />
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 
            bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
          >
            <Search size={24} />
          </button>
        </div>
      </div>

      {/* Categories Section with Image Cards */}
      <div className="mb-12">
        <Title text1={'SHOP BY'} text2={'CATEGORIES'} />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categoriesWithImages.map(({ name, image }) => (
            <Link
              to={`/category/${name}`}
              key={name}
              className="group relative overflow-hidden rounded-xl shadow-lg"
            >
              <div className="relative">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                  <h3 className="text-center text-lg font-medium capitalize">{name}</h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div>
        <Title text1={'ALL'} text2={'PRODUCTS'} />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductItem
                key={product._id}
                id={product._id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;


//       .send(
 // 'service_lwlc77p', // Replace with your EmailJS service ID
  // '__ejs-test-mail-service__', // Replace with your EmailJS template ID
  // formData, // Form data
  // '-NHmpvsBOc4EGkqjj' // Replace with your EmailJS public key
// )