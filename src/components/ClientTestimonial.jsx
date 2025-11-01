// 🟢 Driving School Testimonials Section
import React, { useState, useEffect, useCallback } from "react";

const ClientTestimonial = () => {
  const testimonials = [
    {
      name: "Vetri",
      role: "Student",
      text: "I thought learning to drive a car would be difficult, but this driving school made it easy. The instructors were patient and supportive throughout.",
      rating: 5.0,
    },
    {
      name: "Lakshmi",
      role: "Employee",
      text: "Their schedule was flexible, and the trainer explained every step clearly. I gained confidence within a few days of practice.",
      rating: 4.8,
    },
    {
      name: "Ramesh",
      role: "College Student",
      text: "The instructors are professional and friendly. Thanks to their training, I passed my driving test on the first try!",
      rating: 4.9,
    },
    {
      name: "Sujatha",
      role: "Homemaker",
      text: "The training cars are modern and safe. They provided a comfortable and secure environment, especially for women learners.",
      rating: 5.0,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleNext = useCallback(() => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
      setFade(false);
    }, 300);
  }, [testimonials.length]);

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex((prev) =>
        prev === 0 ? testimonials.length - 1 : prev - 1
      );
      setFade(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [handleNext]);

  return (
    <section
      id="testimonials"
      className="py-16 px-6 sm:py-20 sm:px-10 md:py-28 md:px-16 lg:px-32 bg-linear-to-t from-white via-[#EFFFF6] to-[#e3ffef]"
      data-aos="fade-in"
      data-aos-duration="800"
    >
      {/* === Headings === */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
          <h2 className="font-[bricolage] text-[#15AB55] text-sm sm:text-base md:text-lg tracking-wide">
            Happy Learners
          </h2>
          <h1 className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2 font-semibold text-zinc-900 leading-tight max-w-xl">
            What Our Students Say About Us
          </h1>
        </div>

        <div
          className="text-zinc-800 font-[space] md:max-w-md text-sm sm:text-base leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
        >
          Hear from our students who gained confidence and mastered safe driving
          through our lessons. Our expert trainers focus on building real-world
          driving skills, traffic awareness, and responsible road habits.
        </div>
      </div>

      {/* === Testimonial Card === */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="800"
        className="relative mt-16 flex flex-col items-center justify-center text-center"
      >
        <div
          key={activeIndex}
          className={`bg-white border-2 border-green-100 rounded-2xl p-6 sm:p-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto hover:shadow-xl transition-all duration-500 ease-in-out 
          ${fade ? "opacity-0" : "opacity-100"} flex flex-col justify-between`}
        >
          {/* --- Top --- */}
          <div>
            <div className="flex items-center gap-3 justify-center">
              {/* 🟢 Replaced Image with User Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-[#E8F9EE] text-[#15AB55] rounded-full">
                <i className="ri-user-3-fill text-2xl sm:text-3xl"></i>
              </div>

              <div>
                <h1 className="font-[bricolage] text-base sm:text-lg font-semibold text-zinc-900">
                  {testimonials[activeIndex].name}
                </h1>
                <h2 className="font-[space] text-sm text-zinc-500">
                  {testimonials[activeIndex].role}
                </h2>
              </div>
              <i className="ri-double-quotes-r text-[#15AB55] text-xl sm:text-2xl ml-auto"></i>
            </div>

            {/* --- Text --- */}
            <p className="font-[space] text-sm sm:text-base text-zinc-600 mt-4 leading-relaxed border-b border-zinc-200 pb-4">
              {testimonials[activeIndex].text}
            </p>
          </div>

          {/* --- Rating --- */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex text-[#15AB55] text-lg">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill"></i>
              ))}
            </div>
            <p className="font-[bricolage] font-semibold text-zinc-800">
              {testimonials[activeIndex].rating}
            </p>
          </div>
        </div>

        {/* --- Navigation Arrows --- */}
        <div
          className="flex items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
          data-aos="zoom-in"
          data-aos-delay="500"
          data-aos-duration="400"
        >
          <button
            onClick={handlePrev}
            className="bg-[#15AB55] text-white p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-[#129249] transition"
          >
            <i className="ri-arrow-left-s-line text-lg sm:text-xl"></i>
          </button>

          <button
            onClick={handleNext}
            className="bg-[#15AB55] text-white p-3 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full hover:bg-[#129249] transition"
          >
            <i className="ri-arrow-right-s-line text-lg sm:text-xl"></i>
          </button>
        </div>
      </div>

      {/* --- Dots --- */}
      <div
        className="flex items-center justify-center mt-8 gap-2"
        data-aos="zoom-in"
        data-aos-delay="500"
        data-aos-duration="400"
      >
        {testimonials.map((_, index) => (
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
    </section>
  );
};

export default ClientTestimonial;
