import React from "react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0C1A0C] text-gray-300 py-16 px-6 sm:px-10 md:px-16 lg:px-32"
    >
      {/* Top: brand, links, and contact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-gray-700 pb-10">
        {/* Brand copy */}
        <div>
          <h1 className="text-2xl font-[bricolage] font-semibold text-white">
            Giri<span className="text-[#15AB55]">Vishnu</span> Driving School
          </h1>
          <p className="mt-3 text-sm font-[space] leading-relaxed text-gray-400">
            GiriVishnu Driving School is committed to helping every learner
            master safe, confident, and responsible driving. With experienced
            instructors and modern training methods, we make driving easy for
            everyone.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-[bricolage] font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm font-[space]">
            {[
              { name: "Home", href: "#hero" },
              { name: "About", href: "#about" },
              { name: "Services", href: "#services" },
              // { name: "Our Team", href: "#ourteam" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" },
            ].map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="hover:text-[#15AB55] transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact details */}
        <div>
          <h3 className="text-white font-[bricolage] font-semibold mb-4">
            Contact Info
          </h3>
          <ul className="space-y-5 text-sm font-[space]">
            <li className="flex items-start gap-3">
              <div className="bg-[#132B13] p-3 rounded-lg">
                <i className="ri-phone-line text-[#15AB55]"></i>
              </div>
              <div>
                <h4 className="text-white font-[bricolage] font-medium">
                  Phone
                </h4>
                <p className="text-gray-400">+91 9600387579</p>
                <p className="text-gray-400">+91 7397599579</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-[#132B13] p-3 rounded-lg">
                <i className="ri-mail-line text-[#15AB55]"></i>
              </div>
              <div>
                <h4 className="text-white font-[bricolage] font-medium">
                  Email
                </h4>
                <p className="text-gray-400">girivishnuds@gmail.com</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="bg-[#132B13] p-3 rounded-lg">
                <i className="ri-map-pin-line text-[#15AB55]"></i>
              </div>
              <div>
                <h4 className="text-white font-[bricolage] font-medium">
                  Office Address
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  44 And 44 1A1F Thupallam Bazar, Elavur GUMMIDIPOONDI, Tamil
                  Nadu 601201
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom: copyright and socials */}
      <div className="flex text-center flex-col md:flex-row items-center justify-between mt-10 text-sm font-[space] text-gray-400">
        <p>
          Copyright © {new Date().getFullYear()}{" "}
          <span className="text-white">GiriVishnu Driving School</span>. All
          Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">
          {/* <a href="#" className="hover:text-[#15AB55] transition">
            <i className="ri-linkedin-fill text-lg"></i>
          </a>
          <a href="#" className="hover:text-[#15AB55] transition">
            <i className="ri-facebook-fill text-lg"></i>
          </a> */}
          <a
            href="https://www.instagram.com/gvdriving_academy_gpd"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#15AB55] transition"
          >
            <i className="ri-instagram-fill text-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
