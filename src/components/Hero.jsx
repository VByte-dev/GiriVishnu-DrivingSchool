// 🔸 Hero Section
import React, { useEffect, useState, useCallback } from "react";

const Hero = () => {
  // Carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/images/h1.jpg",
    "/images/h2.jpg",
    "/images/h3.jpg",
    "/images/h4.jpg",
  ];

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => handleNext(), 4000);
    return () => clearInterval(interval);
  }, [handleNext]);

  // Responsive Logo

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section
      id="hero"
      className="bg-[#effff6] mt-8 py-24 px-6 md:py-32 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-10"
    >
      {/* 🟢 Left Side - Text Content */}
      <div
        className="max-w-xl text-left md:text-left"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2
          className="font-[bricolage] text-[#15AB55] text-sm sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Hi, There!
        </h2>

        <h1
          className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mt-2"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Learn to Drive with <span className="text-[#15AB55]">Confidence</span>{" "}
          & Safety!
        </h1>

        <p
          className="font-[space] text-xs sm:text-sm md:text-base text-gray-600 py-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Empowering learners to become confident, responsible drivers through
          personalized training, modern vehicles, and professional guidance.
          Start your journey toward driving independence today!
        </p>

        <div
          className="flex justify-center md:justify-start items-center gap-4 text-xs sm:text-sm md:text-base font-[space]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#services"
            className="bg-gradient-to-r from-[#15AB55] to-green-700 flex gap-2 items-center text-white rounded px-4 py-2 md:px-5 md:py-2.5 font-[space] hover:bg-gradient-to-r hover:from-[#e85d00] hover:to-[#c74b00] transition-all duration-300"
          >
            Book Your Lesson
            <i className="ri-arrow-right-line"></i>
          </a>

          <a
            href="#about"
            className="flex items-center gap-2 cursor-pointer hover:text-[#15AB55] transition-colors"
          >
            <i className="ri-play-circle-line text-lg md:text-xl"></i>
            <span>How We Train</span>
          </a>
        </div>
      </div>

      {/* 🟢 Right Side - Image Carousel */}
      <div
        className="w-full md:w-[45%] relative overflow-hidden rounded-2xl"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        {/* Carousel Container */}
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          {[
            "/images/h1.jpg",
            "/images/h2.jpg",
            "/images/h3.jpg",
            "/images/h4.jpg",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Driving School Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover rounded-2xl transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* --- Navigation Buttons --- */}
          <button
            onClick={handlePrev}
            className="opacity-50 hover:opacity-100 active:opacity-100 absolute w-8 h-8 md:w-10 md:h-10 top-1/2 flex justify-center items-center left-3 -translate-y-1/2 bg-[#15AB55] text-white p-2 rounded-full hover:bg-[#129249] transition"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          <button
            onClick={handleNext}
            className="opacity-50 hover:opacity-100 active:opacity-100 absolute w-8 h-8 md:w-10 md:h-10 top-1/2 flex justify-center items-center right-3  -translate-y-1/2 bg-[#15AB55] text-white p-2 rounded-full hover:bg-[#129249] transition"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>

          {/* --- Dots --- */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {[
              "/images/h1.jpeg",
              "/images/h2.jpeg",
              "/images/h3.jpeg",
              "/images/h4.jpeg",
              "/images/h4.jpeg",
            ].map((_, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? "w-6 h-2 bg-[#15AB55] rounded-full"
                    : "w-2 h-2 bg-green-200 rounded-full"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
