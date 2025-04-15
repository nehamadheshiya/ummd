import React from "react";
import donationback from "../assets/Website/Blogs.png";
import Footer from "./Footer";
import vector from "../assets/Vector.png";
import blogImg1 from "../assets/testback.png";
import blogImg2 from "../assets/testback.png";
import blogImg3 from "../assets/testback.png";
import DonationSection from "./DonationSection";
import FAQSection from "./FAQSection";
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"
import backmobile from "../assets/Mobile/Blogs.png"

const Blog = () => {
  const handleReadMore = (blogId) => {
    console.log(`Redirecting to blog ${blogId}`);
    // Replace with actual navigation logic, e.g., react-router
  };

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <header
        className="relative bg-cover bg-center bg-no-repeat w-full h-[18vh] lg:h-[65vh] flex items-center justify-center"
        style={{ backgroundImage: `url(${donationback})` }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[rgba(9,76,59,0.9)] to-[rgba(9,76,59,0.2)]"></div>
        <img src={vector} alt="Vector" className="absolute top-24 left-0 h-32" /> */}
        <div className="relative  z-10 max-w-3xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">Blogs</h1>
          <p className="mt-6 text-base md:text-lg font-medium ">
            Help Support Our Charities!
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <div className="max-w-7xl mx-auto p-6 text-gray-900">
        <h2 className="text-4xl  font-bold text-center text-gray-900">Latest Blogs</h2>
        <p className="text-gray-600 text-center max-w-lg mx-auto mt-3 text-base leading-relaxed">
          Stay updated with our latest initiatives, success stories, and insights into our charitable efforts.
        </p>
        <div className="max-w-7xl mx-auto p-0 md:p-2 mt-4 text-gray-900">
        <section className="mb-6">
          <h2 className="text-xl font-semibold">Welcome to Umeedein: A New Chapter of Hope</h2>
          <p className="text-justify text-gray-700 mt-2">
          At Umeedein, we believe that even the smallest spark of hope can light up lives. Our journey began with a simple mission — to bring meaningful change to communities that need it the most. Through grassroots initiatives, education programs, and compassionate outreach, we're working to uplift, empower, and inspire.

This blog will be our voice — a space to share stories of impact, updates on our projects, reflections from the field, and the incredible journeys of the people we work with. You'll get a behind-the-scenes look at how change really happens — not overnight, but with love, dedication, and unity.

We invite you to walk with us, learn with us, and be a part of the movement. Because together, we are Umeedein — we are hope.
          </p>
        </section>

       
      </div>
     
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {/* Blog 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img src={blog3} alt="Blog 1" className="w-full h-56 object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold">How Small Donations Create a Big Impact in Someone’s Life</h3>
              <p className="text-gray-600 mt-2 text-sm">
              Millions of people struggle with poverty, healthcare, education, and basic necessities in a country as large and diverse as India. Given the seriousness of these issues, a lot of people believe that only significant investment can have an impact.
              </p>
              <button 
                className="mt-4 text-[#094C3B] font-bold hover:underline"
                onClick={() => handleReadMore(1)}
              >
                {/* Read More */}
              </button>
            </div>
          </div>
          
          {/* Blog 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img src={blog1} alt="Blog 2" className="w-full h-56 object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold">The Environmental Impact
              of Donating vs.Throwing Away</h3>
              <p className="text-gray-600 mt-2 text-sm">
              Necessities such as food for the poor, medical care for those who cannot afford treatment, and education for poor children are facilitated by small donations. To make underprivileged communities better and give people the opportunity.
              </p>
              <button 
                className="mt-4 text-[#094C3B] font-bold hover:underline"
                onClick={() => handleReadMore(2)}
              >
                {/* Read More */}
              </button>
            </div>
          </div>
          
          {/* Blog 3 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all">
            <img src={blog2} alt="Blog 3" className="w-full h-56 object-cover" />
            <div className="p-3">
              <h3 className="text-lg font-semibold">Why Giving Back Feels So Good
              :The Science Behind Altruism</h3>
              <p className="text-gray-600 mt-2 text-sm">
              Humans are naturally social creatures. Studies have shown that acts of altruism activate the brain's reward centers, similar to how we respond to food or music. Helping others reinforces our sense of purpose and belonging.
              </p>
              <button 
                className="mt-4 text-[#094C3B] font-bold hover:underline"
                onClick={() => handleReadMore(3)}
              >
                {/* Read More */}
              </button>
            </div>
          </div>
        </div>
      </div>

      

      <DonationSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Blog;
