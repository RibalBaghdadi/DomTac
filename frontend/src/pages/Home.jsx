import React from 'react'
import Hero from '../componenets/Hero'
import NewArrival from '../componenets/NewArrival'
import BestSeller from '../componenets/BestSeller'
import OurPolicy from '../componenets/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <NewArrival/>
      <BestSeller/>
      <OurPolicy/>
    </div>
  )
}

export default Home
