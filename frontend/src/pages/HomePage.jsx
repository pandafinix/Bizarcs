import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Services from "../components/Services";
import Blogs from "../components/Blogs";
import News from "../components/News";
import ClientForm from "../components/ClientForm";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials"; // 👈 import Testimonials

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "services",
        "blogs",
        "news",
        "contact",
        "testimonials",
      ];
      const scrollY = window.scrollY + 200;
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (
          el &&
          el.offsetTop <= scrollY &&
          el.offsetTop + el.offsetHeight > scrollY
        ) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Navbar activeSection={activeSection} />

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-100 to-white py-24 px-4"
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-blue-700 drop-shadow-md"
          >
            Empowering Global HR with Bizarcs
          </motion.h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8">
            Streamline your hiring, payroll, and compliance with our expert EOR
            and HR consultancy solutions.
          </p>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-2xl shadow-xl transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services">
        <Services />
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-blue-700 mb-6">Get in Touch</h3>
          <p className="text-gray-600 mb-10">
            Fill out the form below to reach out to us. We'd love to hear from
            you.
          </p>
          <div className="bg-gray-100 p-8 rounded-3xl shadow-xl">
            <ClientForm />
          </div>
        </div>
      </section>
      <section id="testimonials" className="py-20 bg-blue-50">
        <Testimonials />
      </section>
      {/* Blogs Section */}
      <section id="blogs">
        <Blogs />
      </section>

      {/* News Section */}
      <section id="news">
        <News />
      </section>

      <Footer />
    </div>
  );
}
