import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import background from "../assets/Website/Dashboard..png";
import home1 from "../assets/home1.png";
import home2 from "../assets/handicon.png";
import home3 from "../assets/pot.png";
import home4 from "../assets/wallet.png";


export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);

  return (
    <div className="w-full relative mt-20">
     

      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] md:h-[87vh] flex items-center justify-center px-6"
        style={{ backgroundImage: `url(${background})` }}
      >
        {/* Background Overlay */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div> */}

        {/* Floating Images */}
        {/* <img
          src={home1}
          alt="Home 1"
          className="absolute top-0 left-0 w-28 md:w-48"
        />
        <img
          src={home2}
          alt="Home 2"
          className="absolute top-0 right-0 w-32 md:w-48"
        />
        <img
          src={home3}
          alt="Home 3"
          className="absolute bottom-1 lg:bottom-[-10px] left-0 w-32 md:w-48"
        />
        <img
          src={home4}
          alt="Home 4"
          className="absolute bottom-2 right-5 md:right-32 w-28 md:w-40"
        /> */}

        {/* Hero Content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-6xl py-2 font-bold leading-tight">
            Every Helping Hand, <br /> Every Heartfelt Change
          </h1>
          <p className="mt-4 text-sm md:text-lg py-2">
            Every helping hand brings heartfelt change, creating ripples of hope
            and compassion. Each act of kindness lifts lives, inspiring others
            and uniting us in a shared journey toward a brighter, more
            compassionate world.
          </p>
         

        </div>
      </header>
    </div>
  );
}
