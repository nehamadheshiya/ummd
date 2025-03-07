import React from "react";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";
import Footer from "./Footer";
import FAQSection from "./FAQSection";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import GoogleMapComponent from "./GoogleMapComponent";

const ContactPage = () => {
  return (
    <div className="mt-20">
      <div>
        <div className="flex flex-col md:flex-row   p-6 md:p-10 max-w-7xl mx-auto  rounded-lg">
          {/* Left Section - Contact Info */}
          <div className="bg-[#0F4C3A] text-white p-6 md:p-10 w-full md:w-1/3 rounded-lg">
            <h2 className="text-2xl font-semibold py-4">Contact Information</h2>
            <p className="mt-2 text-sm ">Say something to start a live chat</p>

            <div className="mt-6 space-y-8">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <p className="text-sm">99919477908</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📧</span>
                <p className="text-sm">info@umeedien.com</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-lg">📍</span>
                <p className="text-sm">
                  Amrapali riverview, Near Dmart Greater Noida 201306
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:text-pink-700" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-500 hover:text-blue-700" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-2/3 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700">First Name</label>
                <input
                  type="text"
                  className="w-full border-b p-2 focus:outline-none focus:border-gray-900"
                />
              </div>
              <div>
                <label className="block text-gray-700">Last Name</label>
                <input
                  type="text"
                  className="w-full border-b p-2 focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                className="w-full border-b p-2 focus:outline-none focus:border-gray-900"
              />
            </div>
            <div className="mt-6">
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="text"
                className="w-full border-b p-2  focus:outline-none"
                maxLength="10"
                // placeholder="Enter  phone number"
                onInput={(e) =>
                  (e.target.value = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10))
                }
              />
            </div>

            <div className="mt-6">
              <label className="block text-gray-700">Message</label>
              <textarea
                className="w-full border p-2 focus:outline-none focus:border-gray-900"
                rows="3"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <div className="mt-6">
              <button className="bg-yellow-400 text-black px-6 py-2 rounded-md shadow-md hover:bg-yellow-500">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center px-6 pt-8">
        {/* Header Section */}
        {/* <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full text-sm font-semibold uppercase tracking-wide shadow-md hover:bg-green-800 transition">
          Start Donations
        </button> */}
     
      </div>
      <div>
        <div className="bg-[#094C3B] relative h-80 md:h-96 text-white mt-5 flex flex-col items-center justify-center text-center px-6">
          {/* Icons */}
          <img
            src={icn4}
            alt="vector"
            className="absolute top-4 left-4 w-16 h-16 md:w-28 md:h-28"
          />
          <img
            src={icn2}
            alt="icon1"
            className="absolute top-0 right-0 w-16 h-16 md:w-28 md:h-28"
          />
          <img
            src={icn1}
            alt="icon2"
            className="absolute bottom-0 left-20 w-16 h-16 md:w-24 md:h-24"
          />
          <img
            src={home3}
            alt="#"
            className="absolute bottom-0 right-4 w-12 h-14 md:w-24 md:h-24"
          />

          {/* Centered Content */}
          <div className="max-w-2xl">
            <p className="text-4xl font-semibold">
              Subscribe to our Newsletter
            </p>
            <p className="text-base mx-2 md:mx-10 mt-6">
              Subscribe to our newsletter to stay updated with the latest news,
              exclusive content, and special offers! Join our community and be
              the first to know about exciting events and opportunities. Don’t
              miss out—sign up today!
            </p>
          </div>
        </div>
      </div>
      <FAQSection />
      <GoogleMapComponent/>
      <Footer />
    </div>
  );
};

export default ContactPage;
