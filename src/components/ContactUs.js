import React from "react";
import icn1 from "../assets/icn1.png";
import icn2 from "../assets/icn2.png";
import home3 from "../assets/home3.png";
import icn4 from "../assets/icn4.png";
import Footer from "./Footer";
import FAQSection from "./FAQSection";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import GoogleMapComponent from "./GoogleMapComponent";
import contact from "../assets/Website/Contactus.png";
import contact1 from "../assets/contact1.png";
import contact2 from "../assets/contact2.png";
import contact3 from "../assets/contact3.png";
import circle1 from "../assets/circle1.png";
import circle2 from "../assets/circle2.png";
import insta from "../assets/instag.png";
import twiter from "../assets/twiter.png";
import social3 from "../assets/social3.png";

const ContactPage = () => {
  return (
    <div className="mt-20">
   
       <header
        className="relative bg-cover bg-center bg-no-repeat h-[18vh] lg:h-[65vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${contact})` }}
      >
        
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Contact US
          </h1>
          <p className="mt-2 md:mt-6 text-base md:text-lg font-medium">
            Help Support Our Charities!
          </p>
        </div>
      </header>
      
      <div>
        <div className="flex flex-col md:flex-row  mt-5  p-6 md:p-10 max-w-7xl mx-auto  rounded-lg">
          {/* Left Section - Contact Info */}
          <div className="relative bg-[#0F4C3A] text-white p-6 md:p-10 w-full md:w-1/3 rounded-lg overflow-hidden">
            {/* Background Circles */}
            <img
              src={circle1}
              alt="Background Circle"
              className="absolute bottom-4 right-6 w-20 opacity-50"
            />
            <img
              src={circle2}
              alt="Background Circle"
              className="absolute bottom-0 right-0 w-32 opacity-30"
            />

            {/* Contact Details */}
            <h2 className="text-2xl font-semibold py-4">Contact Information</h2>
            <p className="text-gray-200 text-sm">
              Say something to start a live chat!
            </p>

            <div className="mt-10 space-y-6">
              <div className="flex items-center space-x-3">
                <img src={contact3} alt="Phone Icon" className="w-6 h-6" />
                <p className="text-sm">9991947908</p>
              </div>
              <div className="flex items-center space-x-3">
                <img src={contact1} alt="Email Icon" className="w-6 h-6" />
                <p className="text-sm">info@umeedien.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <img src={contact2} alt="Location Icon" className="w-6 h-6" />
                <p className="text-sm">
                  Amrapali riverview Near Dmart, <br />
                  Greater Noida 201306
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4  mt-20 ml-1 lg:ml-0 lg:mt-48">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twiter} alt="Twitter" className="w-7 h-7" />
              </a>
              <a
                href="https://www.instagram.com/umeedein_official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={insta} alt="Instagram" className="w-7 h-7" />
              </a>
              <a
                href=" https://www.linkedin.com/company/umeedein13/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={social3} alt="Chat" className="w-7 h-7" />
              </a>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full md:w-2/3 p-6 md:p-10 mt-5 lg:mt-0">
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
            className="absolute md:block hidden bottom-0 left-20 w-16 h-16 md:w-24 md:h-24"
          />
          <img
            src={home3}
            alt="#"
            className="absolute md:block hidden bottom-0 right-4 w-12 h-14 md:w-24 md:h-24"
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
      {/* <GoogleMapComponent/> */}
      <Footer />
    </div>
  );
};

export default ContactPage;
