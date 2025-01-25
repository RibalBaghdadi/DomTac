import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import RelatedProducts from '../componenets/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  // Fetch product data
  const fetchProductData = () => {
    const foundProduct = products.find(item => item._id === productId);
    if (foundProduct) {
      setProductData(foundProduct);
      setImage(foundProduct.image[0]); // Assuming the product has at least one image
    } else {
      setProductData(null); // No product found, set to null
    }
    setLoading(false); // Data fetched, stop loading
  };

  useEffect(() => {
    setLoading(true); // Start loading before fetching data
    fetchProductData();
  }, [productId, products]);

  if (loading) {
    return <div className="loading-spinner">Loading...</div>; // Add a loading spinner or message
  }

  if (!productData) {
    return <div>Product not found</div>; // Handle the case when no product is found
  }

  // WhatsApp URL with product link
  const whatsAppMessage = `Hello, I'm interested in the product "${productData.name}" you have. Here's the product link: ${window.location.href}`;

  return (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 px-4 sm:px-12'>
      {/* ---------------------Product Data ---------------------- */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* ---------------------Product Images ---------------------- */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flx-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* -------------- Product Info ----------------------- */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          
          {/* Order via WhatsApp Button */}
          <div className='mt-6'>
            <a 
              href={`https://wa.me/96181059808?text=${encodeURIComponent(whatsAppMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-green-500 text-white px-8 py-3 text-sm rounded-lg hover:bg-green-600 transition-colors duration-300'>
              Order on WhatsApp
            </a>
          </div>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
          </div>
        </div>
      </div>

      {/* ----------- display related products ------------ */}
      <RelatedProducts category={productData.category} />
    </div>
  );
};

export default Product;
