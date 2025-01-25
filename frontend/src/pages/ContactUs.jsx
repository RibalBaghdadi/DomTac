import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { assets } from '../assets/assets';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const whatsappNumber = '96181059808';

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs
      .send(
        'service_lwlc77p', // Replace with your EmailJS service ID
        'template_ff69p6a', // Replace with your EmailJS template ID
        formData,
        '-NHmpvsBOc4EGkqjj' // Replace with your EmailJS public key
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          toast.error('Failed to send the message. Please try again later.', {
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      );
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Toast Container */}
      <ToastContainer />

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[40vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${assets.back})`,
        }}
        data-aos="fade-up"
      >
        <h1 className="relative text-4xl md:text-5xl font-bold text-center text-white drop-shadow-lg">
          Contact <span className="bg-white text-red-500 px-2 rounded-md">Us</span>
        </h1>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Have any questions, feedback, or need assistance? We'd love to hear from you.
              Fill out the form below, or reach us on WhatsApp!
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 text-white bg-green-500 hover:bg-green-600 px-6 py-3 rounded-md shadow-md inline-block w-full md:w-auto"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 p-8 rounded-lg shadow-lg"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-md font-bold hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
