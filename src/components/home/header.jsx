// header.jsx
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-[#102A83] text-white py-2 px-4">
      <div className="container mx-auto flex items-center justify-around space-x-4">
        {/* Left Section: Mobile View - Only Phone, Mail, and Instagram Icons */}
        <div className="flex items-center space-x-6 text-sm sm:hidden">
          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-[#DB8E00]">
            <FaPhoneAlt className="text-xl" />
          </a>
          <a href="mailto:example@example.com" className="flex items-center space-x-2  hover:text-[#DB8E00]">
            <FaEnvelope className="text-xl" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl  hover:text-[#DB8E00]" />
          </a>
        </div>

        

        {/* Right Section: Desktop View - Full Contact Info and Book Appointment Button */}
        <div className="container mx-auto items-center justify-around space-x-4 hidden sm:flex">
        <div className="flex items-center space-x-6 text-sm">

          <a href="tel:+1234567890" className="flex items-center space-x-2 hover:text-[#DB8E00]">
            <FaPhoneAlt className="text-xl" />
            <span>+91 9882123456</span>
          </a>
          <a href="mailto:example@example.com" className="flex items-center space-x-2  hover:text-[#DB8E00]">
            <FaEnvelope className="text-xl" />
            <span>abc@gmail.com</span>
          </a>
          <a href="https://maps.app.goo.gl/qiHc2LCpLXkAJtdy6" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-xl" />
            <span>Site No. 4, behind community centre, Sector 15, Panchkula (HR)</span>
          </a>
          </div>

          <div className="flex items-center space-x-4">
          
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-white text-xl hover:text-red-600" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-white text-xl hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-xl hover:text-pink-500" />
          </a>
          </div>
        </div>

        {/* Desktop "Book Appointment" Button */}
        <div className="md:hidden sm:block">
          <a
            href="#"
            className="bg-white text-black px-1.5 py-1 rounded-sm text-sm hover:bg-[#DB8E00] transition-all whitespace-nowrap"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

