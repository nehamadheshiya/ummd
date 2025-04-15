import React from "react";
import yellowbg from "../assets/yellowbg.png";
import { FaHeartbeat, FaTint, FaTree } from "react-icons/fa"; 
import health from "../assets/health.png"
import clean from "../assets/cleen.png"
import eco from "../assets/eco.png"


const DonationSection = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center px-4 sm:px-6 py-16 bg-cover bg-center"
      style={{ backgroundImage: `url(${yellowbg})` }}
    >
      {/* Button */}
      <button className="bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-800 transition">
        START DONATIONS
      </button>

      {/* Title & Subtitle */}
      <h2 className="text-3xl font-bold text-black text-center mt-4">
        Explore What We Donate
      </h2>
      <p className="text-center text-gray-800 max-w-xl mt-2 text-lg">
        Installing water wells and purification systems in areas with limited access to clean water.
      </p>

      {/* Cards Section */}
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-[#094C3B] text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start">
          <div className="bg-[#FFE353] p-3 rounded-xl">
            <img src={health} className="text-2xl text-green-900 h-7 w-8" />
          </div>
          <h3 className="text-xl font-semibold">Healthcare & Essentials</h3>
          <p className="text-sm">
          We donate medical kits, hygiene products, nutritious food, and clean water to improve the well-being of vulnerable communities, focusing on health and sanitation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#094C3B] text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start">
        <div className="bg-[#FFE353] p-2 rounded-xl">
          <img src={clean} className="text-2xl text-green-900 h-9 w-10" />

          </div>
          <h3 className="text-xl font-semibold">Livelihood & Sustainability</h3>
          <p className="text-sm">
          We support skill development, vocational training, and sustainable resources like sewing machines and farming tools, empowering individuals to become self-reliant.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#094C3B] text-white p-6 rounded-xl shadow-lg flex flex-col gap-4 items-start">
        <div className="bg-[#FFE353] p-2 rounded-xl">
          <img src={eco} className="text-2xl text-green-900 h-9 w-10" />

          </div>
          <h3 className="text-xl font-semibold"> Education & Learning Materials</h3>
          <p className="text-sm">
          We provide school supplies, books, uniforms, and scholarships to underprivileged children, ensuring they have the resources needed for a brighter future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationSection;
