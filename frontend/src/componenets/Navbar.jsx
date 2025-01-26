import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { FaSearch, FaShoppingCart } from 'react-icons/fa'

const Navbar = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div className='flex items-center justify-between py-5 px-4 sm:px-6 font-medium bg-black text-white'>
      <Link to='/'><img src={assets.logo1} className='w-20 h-20' alt="Logo" /></Link>

      <ul className='hidden sm:flex gap-5 text-sm'>
        <NavLink to="/" className="flex flex-col items-center gap-1 hover:text-red-500">
          <p>Home</p>
        </NavLink>
        <NavLink to="/shop" className="flex flex-col items-center gap-1 hover:text-red-500">
          <p>Shop</p>
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1 hover:text-red-500">
          <p>About Us</p>
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1 hover:text-red-500">
          <p>Contact Us</p>
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <Link to={'/shop'}><FaSearch className='w-5 h-5 cursor-pointer hover:text-red-500' /></Link>
        <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden invert' alt="Menu" />
      </div>

      {/* Sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 overflow-hidden bg-black transition-all z-50 ${visible ? 'h-[510px] w-full max-h-[500px]' : 'w-0 h-0'}`}>
        <div className='flex flex-col text-white'>
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180 text-red' src={assets.menu_icon} alt="Close Menu" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/">Home</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/shop">Shop</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/about">About Us</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/contact">Contact Us</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar
