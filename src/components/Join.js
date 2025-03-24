import { useState } from "react";
import { Menu, X } from "lucide-react";
import background from "../assets/children.png";
import testi1 from "../assets/testi1.png";
import testi2 from "../assets/testi2.png";
import testi3 from "../assets/testi3.png";


export default function Join() {
  return (
    <div className="w-full mt-5 relative">
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[75vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div>

    
        <img
          src={testi1}
          alt="Testimonial 1"
          className="absolute lg:w-48 lg:h-64 w-36 h-48 top-[-2rem] left-0"
        />

        {/* Testi2 Image (Bottom-Left Corner) */}
        <img
          src={testi2}
          alt="Testimonial 2"
          className="absolute bottom-0 left-0 w-28 md:w-28 lg:w-40"
        />
         <img
          src={testi3}
          alt="Testimonial 2"
          className="absolute top-3 lg:top-24 right-0 w-20 md:w-28 lg:w-36"
        />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            Join Our Community of Donors and Volunteers:<br></br> 
            Be Part of Positive Change in the World!
          </h1>
          <p className="mt-4 text-4xl md:text-5xl font-bold">131,295+</p>
          {/* <p className="mt-4 text-base md:text-lg font-medium">
            Join the Many Who Already Support Our Mission
          </p> */}
          <div className="mt-6 mb-4 md:mb-0 flex justify-center space-x-4">
            <a href="/contact">
            <button className="bg-yellow-400 font-semibold text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-500 transition-all">
              Join Our Community
            </button>
            </a>
          
          </div>
        </div>
      </header>
    </div>
  );
}
