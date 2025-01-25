import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
  return (
    <div className="relative h-96 w-full">
      <img src={assets.backgroundHero} alt="Hero" className="w-full h-full object-fill" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold">DomTac</h1>
        <p className="mt-4 text-lg md:text-2xl">Your Favorite Music Instruments Shop</p>
        <button onClick={() => navigate("/shop")} className="mt-8 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Hero
