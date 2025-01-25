import React from 'react';
import Navbar from './componenets/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import Footer from './componenets/Footer';
import Product from './pages/Product';
import CategoryPage from './pages/CategoryPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container */}
      <Navbar />
      
      {/* Main content area with flex-grow */}
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/product/:productId' element={<Product/>}/>
        </Routes>
      </div>
      
      <Footer /> {/* Footer will now stick to the bottom */}
    </div>
  );
}

export default App;
