import React, { useEffect } from 'react';
import { assets } from '../assets/assets'; // Import assets
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

const AboutUs = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Trigger animations only once
    });
  }, []);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.back})`, // Background image from assets
        }}
        data-aos="fade-up"
      >
        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
          About <span className="bg-white text-red-500 px-2 rounded-md">DomTac</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Introduction Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16" data-aos="fade-up">
          <div>
            <img
              src={assets.vision}
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
              Who We Are
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              At <span className="text-red-500 font-bold">DomTac</span>, we love music and the instruments that make it. Our goal is to give musicians of all levels the tools they need to play and create. From beginners to pros, we’re here to help with top-quality instruments and friendly service.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-red-500 rounded-lg shadow-lg p-8 mb-16" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Our Mission
          </h2>
          <p className="text-lg text-white text-center leading-relaxed">
            "To bring music to life with the best instruments and great support for all musicians."
          </p>
        </div>

        {/* Process Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-red-500 text-center mb-12" data-aos="fade-up">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-right">
              <h3 className="text-xl font-bold text-red-500 mb-4">Step 1: Choose the Best</h3>
              <p className="text-gray-700 leading-relaxed">
                We pick only high-quality instruments and gear from brands we trust.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-up">
              <h3 className="text-xl font-bold text-red-500 mb-4">Step 2: Help You Find Yours</h3>
              <p className="text-gray-700 leading-relaxed">
                Our team helps you choose the perfect instrument for your style and needs.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg" data-aos="fade-left">
              <h3 className="text-xl font-bold text-red-500 mb-4">Step 3: Share the Joy of Music</h3>
              <p className="text-gray-700 leading-relaxed">
                We make music easy to enjoy with fair prices and support for every customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
