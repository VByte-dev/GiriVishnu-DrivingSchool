// Services section component
import React from "react";

const Services = () => {
  const services = [
    {
      icon: "ri-car-fill",
      title: "Four Wheeler Licence",
      price: "₹3000",
      desc: "Comprehensive car driving lessons with full licensing assistance.",
      duration: "24 Classes (1 class/day)",
      distance: "5 km per class",
    },
    {
      icon: "ri-motorbike-fill",
      title: "Two Wheeler Licence",
      price: "₹2500",
      desc: "Learn two-wheeler riding safely and confidently with expert instructors.",
      duration: "24 Classes (1 class/day)",
      distance: "5 km per class",
    },
    {
      icon: "ri-truck-fill",
      title: "Heavy Vehicle (Training + Licence)",
      price: "₹7500",
      desc: "Professional heavy vehicle training and licensing for commercial drivers.",
      duration: "24 Classes (1 class/day)",
      distance: "5 km per class",
    },
    {
      icon: "ri-bike-fill",
      title: "Two Wheeler + Four Wheeler",
      price: "₹5500",
      desc: "Combined car and bike training program with licensing process handled.",
      duration: "24 Classes (1 class/day)",
      distance: "5 km per class",
    },
    {
      icon: "ri-steering-2-fill",
      title: "Training + Licence (Bike + Car)",
      price: "₹8500",
      desc: "Full training package for both bike and car with licence assistance.",
      duration: "24 Classes (1 class/day)",
      distance: "5 km per class",
    },
    {
      icon: "ri-bus-fill",
      title: "Heavy Vehicle",
      price: "₹7500",
      desc: "Intensive heavy vehicle driving lessons focusing on control and safety.",
      duration: "24 Classes (1 class/day)",
      distance: "5 km per class",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#1E2D51] text-white text-center px-6 sm:px-10 md:px-16 lg:px-24 py-16 sm:py-20 md:py-28 pattern"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Section heading */}
      <h2
        className="font-[bricolage] text-transparent bg-linear-to-b from-[#59ffa1] to-[#0b803d] bg-clip-text text-sm sm:text-base md:text-lg tracking-wide"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Our Services
      </h2>
      <h1
        className="font-[bricolage] text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Learn to Drive with Confidence and Safety
      </h1>

      {/* Services grid */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16 text-left"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="group rounded-2xl p-8 bg-white text-[#0B0C0E] shadow-lg 
                 hover:bg-[#15AB55] hover:text-white hover:shadow-2xl
                 active:bg-[#15AB55] active:text-white active:shadow-2xl
                 transition-all duration-300 ease-in-out 
                 border-2 border-transparent 
                 hover:border-green-700 active:border-green-700
                 hover:bg-linear-to-b hover:from-green-700 hover:to-green-900 
                 active:bg-linear-to-b active:from-green-700 active:to-green-900"
            data-aos="zoom-in"
            data-aos-delay={200 + index * 100}
            data-aos-duration="800"
          >
            {/* Icon */}
            <div
              className="rounded-lg w-14 h-14 flex justify-center items-center bg-[#15AB55]/10 
                      group-hover:bg-white/20 group-active:bg-white/20 
                      transition-colors duration-200"
            >
              <i
                className={`${service.icon} text-3xl text-[#15AB55] 
                      group-hover:text-white group-active:text-white`}
              ></i>
            </div>

            {/* Title */}
            <h1
              className="font-[bricolage] text-lg sm:text-xl md:text-2xl mt-6 font-semibold 
                     transition-colors"
            >
              {service.title}
            </h1>

            {/* Price */}
            <p
              className="font-[bricolage] text-xl sm:text-2xl mt-3 font-bold text-[#15AB55] 
                    group-hover:text-white group-active:text-white transition-colors"
            >
              {service.price}
            </p>

            {/* Description */}
            <p
              className="font-[space] text-sm sm:text-base mt-3 leading-relaxed text-gray-600 
                    group-hover:text-white/90 group-active:text-white/90 transition-colors"
            >
              {service.desc}
            </p>

            {/* Training details */}
            <div
              className="mt-4 text-sm sm:text-base text-gray-700 
                      group-hover:text-white/80 group-active:text-white/80 
                      transition-colors space-y-1 font-[space]"
            >
              <p>
                <i
                  className="ri-time-fill text-[#15AB55] 
                        group-hover:text-white group-active:text-white mr-2"
                ></i>
                {service.duration}
              </p>
              <p>
                <i
                  className="ri-roadster-fill text-[#15AB55] 
                        group-hover:text-white group-active:text-white mr-2"
                ></i>
                {service.distance}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-2 mt-6 font-[bricolage] text-sm sm:text-base transition-all duration-300">
              <a
                href="#"
                className="transition-colors duration-300 text-[#0B0C0E] 
         group-hover:text-white group-active:text-white"
              >
                Enroll Now
              </a>
              <i
                className="ri-arrow-right-line text-[#15AB55] 
          group-hover:text-white group-active:text-white 
          transform transition-all duration-300 
          group-hover:translate-x-2 group-active:translate-x-2"
              ></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
