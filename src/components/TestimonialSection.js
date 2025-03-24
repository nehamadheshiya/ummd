import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import delievry from "../assets/delivery.png";
import testimonials from "../assets/testback.png";
import icn2 from "../assets/icn2.png";
import icn4 from "../assets/icn4.png";
import home3 from "../assets/home3.png";
import quote from "../assets/Quotes.png";

const testimonialsData = [
  {
    rating: "⭐ 4/5",
    text: "The team took time to understand our vision and delivered a sleek, professional site that not only looks great but also improved our conversion rates. Their design process was smooth, communication was clear, and they met all deadlines.",
    author: "Emmanuel S",
    image: delievry,
  },
  {
    rating: "⭐ 5/5",
    text: "Outstanding service! The website they built exceeded our expectations. The design is modern, user-friendly, and our engagement has significantly increased.",
    author: "Sophia L",
    image: delievry,
  },
  {
    rating: "⭐ 4.5/5",
    text: "Highly recommended! The team is highly skilled, responsive, and delivered exactly what we needed. Their expertise in UI/UX is unmatched.",
    author: "Daniel R",
    image: delievry,
  },
  {
    rating: "⭐ 4.8/5",
    text: "Fantastic experience working with them. The website is visually stunning, and our clients love it. Great attention to detail and very professional.",
    author: "Jessica M",
    image: delievry,
  },
  {
    rating: "⭐ 5/5",
    text: "A game-changer for our business! Their ability to translate our ideas into a beautiful and functional website was impressive.",
    author: "Michael B",
    image: delievry,
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative md:h-screen bg-yellow-500 text-white p-12 md:p-20 flex flex-col md:flex-row items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${testimonials})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={icn2}
        alt="vector"
        className="absolute top-0 left-8 md:left-96 w-16 h-16 md:w-32 md:h-28"
      />
      <img
        src={icn4}
        alt="icon1"
        className="absolute text-green-900 top-0 right-6 w-16 h-16 md:w-32 md:h-28"
      />
      <img
        src={quote}
        alt="icon2"
        className="absolute bottom-16 right-20 w-10 h-10"
      />
        <img
        src={home3}
        alt="#"
        className="absolute bottom-0 left-0 w-12 md:w-20"
      />

      {/* Left Section */}
      <div className="md:w-1/2 space-y-4 md:p-12 rounded-lg text-center md:text-left flex flex-col items-center md:items-start">
        <div className="bg-white text-green-900 text-sm font-semibold py-3 px-8 rounded-full inline-block">
          TESTIMONIAL
        </div>
        <h2 className="text-3xl md:text-4xl font-bold hidden md:block">
          Community Feedback on Our Mission
        </h2>
        <button className="bg-yellow-400 hidden md:block text-green-900 px-6 py-2 rounded-lg font-semibold mt-4 hover:bg-yellow-500 transition">
          Join us
        </button>
      </div>

      {/* Right Section - Carousel */}
      <div className="md:w-1/2 flex justify-center relative mt-14 md:mt-4 px-4">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>

        <div className="bg-white text-black rounded-xl p-6 shadow-lg max-w-md text-center">
          <p className="text-lg font-semibold pt-6">{testimonialsData[currentIndex].rating}</p>
          <p className="text-gray-700 mt-3 hidden md:block">{testimonialsData[currentIndex].text}</p>
          <p className="text-gray-700 mt-3 block md:hidden">
            {testimonialsData[currentIndex].text.slice(0, 100)}...
          </p>
          <p className="mt-4 font-semibold">{testimonialsData[currentIndex].author}</p>
        </div>

        {/* User Image */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <img
            src={testimonialsData[currentIndex].image}
            alt="User"
            className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-md"
          />
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-200"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 flex space-x-2">
        {testimonialsData.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
