// About section component
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="block md:grid grid-cols-2 place-items-center justify-between py-16 px-6 sm:py-20 sm:px-10 md:py-32 md:px-16 lg:px-32 gap-10"
    >
      {/* Left column: title and image */}
      <div
        className="text-center md:text-left"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h2
          className="font-[bricolage] text-[#0C1A0C] text-sm sm:text-base md:text-lg"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          About <span className="text-[#15AB55]">GiriVishnu</span> Driving
          School
        </h2>

        <h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-[bricolage] my-2 leading-snug text-[#1A2B4E]"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Helping You Drive Confidently and Safely
        </h1>

        <div className="mt-6" data-aos="zoom-in" data-aos-delay="300">
          <img
            src="/images/a1.jpg"
            alt="Driving Training"
            className="rounded-xl w-full max-w-[500px] mx-auto md:mx-0"
          />
        </div>
      </div>

      {/* Right column: description, highlights, CTA */}
      <div className="mt-10 md:mt-0" data-aos="fade-up" data-aos-duration="800">
        <p
          className="font-[space] text-xs sm:text-sm md:text-base leading-relaxed text-center md:text-left mb-10 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At{" "}
          <span className="font-semibold text-[#15AB55]">
            GiriVishnu Driving School
          </span>
          , we turn beginners into confident and responsible drivers. With
          certified instructors, modern vehicles, and personalized training
          programs, we focus on safety, discipline, and confidence behind the
          wheel. Whether you’re learning to drive for the first time or brushing
          up your skills, we make driving simple and stress-free.
        </p>

        <div
          className="grid min-grid-cols-2 sm:grid-cols-2 gap-4 my-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {[
            {
              icon: "ri-roadster-fill",
              title: "Instructors",
              text: "Expert Trainers",
            },
            {
              icon: "ri-user-smile-fill",
              title: "Success",
              text: "High Pass Rate",
            },
            {
              icon: "ri-map-pin-fill",
              title: "Locations",
              text: "Citywide Access",
            },
            {
              icon: "ri-award-fill",
              title: "Experience",
              text: "Trusted Service",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-green-50 border border-green-100 p-2 rounded m-1 lg:m-2"
            >
              <div className="bg-[#E6F6ED] rounded w-12 h-12 flex justify-center items-center">
                <i
                  className={`${item.icon} text-[#15AB55] text-2xl sm:text-3xl`}
                ></i>
              </div>
              <div>
                <h1 className="font-[bricolage] text-base sm:text-lg md:text-xl text-[#1A2B4E]">
                  {item.title}
                </h1>
                <h2 className="font-[space] text-xs sm:text-sm text-[#555]">
                  {item.text}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div
          className="grid font-[space] grid-cols-1 sm:grid-cols-2 gap-2 my-4 text-xs sm:text-sm md:text-base text-center md:text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {[
            "Professional & Certified Trainers",
            "Flexible Batch Timings",
            "Modern Dual-Control Vehicles",
            "Focus on Road Safety & Confidence",
          ].map((point, index) => (
            <h1
              key={index}
              className="m-2 flex items-center justify-left pl-4 md:pl-0 md:justify-start gap-2"
            >
              <i className="ri-checkbox-circle-fill text-[#15AB55] text-lg"></i>
              {point}
            </h1>
          ))}
        </div>

        {/* Calls to action */}
        <div
          className="flex flex-col sm:flex-row gap-6 mt-10 font-[space] items-center justify-center md:justify-start text-xs sm:text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#contact"
            className="bg-gradient-to-r from-[#15AB55] to-[#119249] flex gap-2 items-center text-white rounded px-4 py-2 md:px-5 md:py-2.5 transition-all duration-300 hover:from-[#119249] hover:to-[#0e7a3e]"
          >
            Learn More About Us
            <i className="ri-arrow-right-line"></i>
          </a>

          <div className="flex items-center gap-3 text-center sm:text-left">
            <i className="ri-phone-fill text-[#15AB55] text-2xl"></i>
            <div className="text-left">
              <h1>Call Us Today</h1>
              <h2 className="font-[bricolage] text-sm sm:text-base text-[#1A2B4E]">
                +91 9600387579
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
