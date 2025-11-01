import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

// Component
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ClientTestimonial from "./components/ClientTestimonial";

let App = () => {
  return (
    <>
      <section>
        <Navbar />
        <Hero />
        <Banner />
        <About />
        <Services />
        <ClientTestimonial />
        <Footer />
      </section>
    </>
  );
};

export default App;
