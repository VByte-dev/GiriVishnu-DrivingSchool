import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigateTo = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll helper
  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // update URL hash without reloading
      window.history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    } else {
      navigateTo(`/#${id}`);
    }
    setIsOpen(false);
  };

  // Track section based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace("#", "") || "hero";
      setActiveSection(currentHash);
    };

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("scroll", () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "hero";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // detect if section top is above 50px and bottom is still visible
        if (rect.top <= 80 && rect.bottom >= 80) {
          current = section.id;
        }
      });

      setActiveSection(current);
      // update the URL hash silently
      window.history.replaceState(null, "", `#${current}`);
    });

    handleHashChange(); // run once initially
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleHashChange);
    };
  }, []);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      id="home"
      className="fixed w-full top-0 left-0 bg-[#FCFCFC] z-50 select-none"
    >
      <nav className="container mx-auto flex items-center justify-between px-8 py-6">
        {/* Logo */}

        <div className="flex items-center gap-4">
          <div className="flex-shrink-0">
            <img
              src="stocks/SLogo.jpg"
              alt="Driving School Logo"
              className="w-10 sm:w-12 md:w-14 object-contain"
            />
          </div>
          <div className="text-xs sm:text-sm md:text-base leading-tight">
            <h1 className="font-bold text-gray-900 font-[akira]">
              Giri<span className="text-[#15AB55]">Vishnu</span>
            </h1>
            <h1 className="font-bold text-gray-900 font-[akira]">
              Driving School
            </h1>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-base font-[space]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => smoothScroll(e, item.id)}
              className={`transition-all duration-300 ${
                activeSection === item.id
                  ? "text-[#15AB55] font-semibold"
                  : "text-[#0B0C0E] hover:text-[#15AB55]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a href="#services">
            <button className="bg-gradient-to-r from-[#15AB55] to-green-700 font-[space] flex gap-2 items-center text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300">
              Get Started
              <span className="bg-white rounded-full text-green-700 w-6 h-6 flex items-center justify-center">
                <i className="ri-arrow-right-line"></i>
              </span>
            </button>
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center text-gray-700 text-2xl"
        >
          <i className={`ri-${isOpen ? "close-large-line" : "menu-line"}`}></i>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="font-[space] w-full text-center md:hidden bg-[#FCFCFC] shadow-xl border-white motion-preset-slide-down motion-duration-100 ">
          <div className="flex flex-col space-y-4 px-6 py-4 font-medium text-gray-700">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => smoothScroll(e, item.id)}
                className={`transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#15AB55] font-semibold"
                    : "text-[#0B0C0E] hover:text-[#15AB55]"
                }`}
              >
                {item.label}
              </a>
            ))}
            <hr className="border-zinc-300" />

            <div className="">
              <a href="#services" className="w-full">
                <button className="bg-gradient-to-r w-full from-[#15AB55] to-green-700 font-[space] flex items-center justify-between gap-2 text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition-all duration-300">
                  Get Started
                  <span className="bg-white rounded-full text-[#15AB55] w-6 h-6 flex items-center justify-center">
                    <i className="ri-arrow-right-line"></i>
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
