import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa'; // Import social media icons

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-12 my-8 mt-16 text-sm px-4 py-3">
        {/* Left section with logo and description */}
        <div>
          <img src={assets.logo1} className="mb-3 w-32" alt="Music Shop Logo" />
          <p className="w-full md:w-2/3 text-gray-300 pl-8">
            Welcome to the best music store in town. We offer a wide variety of musical instruments for all levels. Whether you're a beginner or a professional, we have everything you need to create beautiful music. From guitars to drums, we’ve got you covered!
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-3 pl-8">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-300">
            <li><Link to="/" className="hover:text-red-500 pl-8">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-500 pl-8">About Us</Link></li>
            <li><Link to="/shop" className="hover:text-red-500 pl-8">Shop</Link></li>
            <li><Link to="/contact" className="hover:text-red-500 pl-8">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <p className="text-xl font-medium mb-3 pl-8">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-300 pl-8">
            <li>+961 81 059 808</li>
            <li>ribalbaghdadi33@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 py-4">
        <a href="https://www.facebook.com/profile.php?id=100072301339926" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
          <FaFacebook size={24} />
        </a>
        <a href="https://www.instagram.com/domtac.musicshop/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.tiktok.com/@dom.tac/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-red-500">
          <FaTiktok size={24} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="border-gray-500" />
        <p className="py-3 text-sm text-center">Copyright 2025&copy; RibalBaghdadi - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
