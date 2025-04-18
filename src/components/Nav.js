import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logogif from "../assets/GIFN.gif";
import cross from "../assets/cross.png";
import threedots from "../assets/threedot.png"
import gg_menu from "../assets/gg_menu.png";
import ScrollToTop from "./ScrollToTop"; 

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  return (
    <div>
      <>
        <nav className="bg-white shadow-md border-b border-gray-200 fixed top-0 left-0 w-full z-50 h-20">
          <div className="w-full flex justify-between items-center py-2 md:py-2.5">
            <img
              src={logogif}
              alt="Logo"
              className="md:h-16 md:w-40 h-14 w-28 ml-0 md:ml-2"
            />

            <div className="flex items-center space-x-10 pr-4 md:pr-14">
              <ul className="hidden md:flex space-x-16 text-gray-700">
                {[{ name: "Home", path: "/" }].map((item) => (
                  <li
                    key={item.name}
                    className="hover:text-green-900 text-[15px] cursor-pointer relative group"
                  >
                    <Link to={item.path}>{item.name}</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}

                {/* About Us Dropdown - Placed After Home */}
                <div
                  className="relative"
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                >
                  <li className="cursor-pointer text-[15px] flex items-center">
                    About Us <ChevronDown size={18} className="ml-1" />
                  </li>
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>

                  {aboutDropdown && (
                    <ul className="absolute left-0 top-full mt-0 w-48 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                      {[
                        { name: "Our Story", path: "/our-story" },
                        { name: "How We Work", path: "/how-we-work" },
                      ].map((subItem) => (
                        <li
                          key={subItem.name}
                          className="px-4 py-2 text-[14px] hover:bg-gray-100 cursor-pointer"
                        >
                          <Link
                            to={subItem.path}
                            onClick={() => setAboutDropdown(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {[
                  { name: "Donation", path: "/donation" },
                  { name: "Blog", path: "/blog" },
                  { name: "Contact Us", path: "/contact" },
                  // { name: "Privacy Policy", path: "/privacy-policy" },
                  // { name: "Terms & Condition", path: "/terms-conditions" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="hover:text-green-900 text-[15px] cursor-pointer relative group"
                  >
                    <Link to={item.path}>{item.name}</Link>
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#094C3B] transition-all duration-300 group-hover:w-full"></span>
                  </li>
                ))}
              </ul>

              {/* <button  className="hidden md:block bg-[#094C3B] text-white px-6 py-2 rounded-full shadow-md hover:bg-green-700 transition-all">
                Donate Now
              </button> */}

              {/* Mobile Menu Button */}
              <button className="md:hidden h-10 w-10" onClick={() => setMenuOpen(true)}>
                <img
                  src={gg_menu}
                  className="transition-transform duration-300 p-1  rounded-md ease-in-out transform hover:scale-110"
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        ></div>

        <div
          className={`fixed top-0 right-0  mt-20 bg-gray-50 w-[60%] shadow-2xl rounded-bl-lg p-6 transform transition-transform duration-300 z-[600] ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ maxHeight: "100vh", overflowY: "auto" }}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setMenuOpen(false)}
          >
            <img className=" h-4 w-4" src={cross} alt="cut" />
          </button>
          <ul className="mt-4 space-y-7 text-gray-700">
            {[
              { name: "Home", path: "/" },
              { name: "Donation", path: "/donation" },
              { name: "Blog", path: "/blog" },
              // { name: "Privacy&Policy", path: "/privacy-policy" },
              // { name: "Terms&Conditions", path: "/terms-conditions" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li
                key={item.name}
                className="hover:text-green-900 text-sm cursor-pointer"
              >
                <Link to={item.path} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}

            {/* About Us Dropdown (Mobile) */}
            <li className="cursor-pointer">
              <div
                className="flex items-center justify-between"
                onClick={() => setAboutDropdown(!aboutDropdown)}
              >
                <span className="text-[14px]">About Us</span>
                <ChevronDown
                  size={18}
                  className={`transition-transform  ${
                    aboutDropdown ? "rotate-180" : ""
                  }`}
                />
              </div>

              {aboutDropdown && (
                <ul className="mt-2 text-[14px] pl-4 space-y-2">
                  {[
                    { name: "Our Story", path: "/our-story" },
                    { name: "How We Work", path: "/how-we-work" },
                  ].map((subItem) => (
                    <li
                      key={subItem.name}
                      className="py-1 hover:text-green-900"
                    >
                      <Link
                        to={subItem.path}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>

            {/* <Link to="/donation">
              <button
                className="bg-[#094C3B] text-white px-6 py-2 mt-6 rounded-full shadow-md w-full"
                onClick={() => setMenuOpen(false)}
              >
                Donate Now
              </button>
            </Link> */}
          </ul>
        </div>
      </>
    </div>
  );
};

export default Nav;
