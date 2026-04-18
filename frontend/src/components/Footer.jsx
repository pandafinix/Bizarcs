import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-14 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Bizarcs</h2>
          <p className="text-gray-400 text-base">
            Empowering global businesses with expert EOR, HR, and payroll solutions.
          </p>
          <p className="text-gray-500 mt-4">
            &copy; {new Date().getFullYear()} Bizarcs. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-gray-400">📍 123 Global Street, New York, NY 10001</p>
          <p className="text-gray-400">📞 +1 (234) 567-8901</p>
          <p className="text-gray-400">✉️ contact@bizarcs.com</p>
          <p className="text-gray-400">🕒 Mon - Fri: 9AM - 6PM</p>
        </div>

        {/* Navigation + Socials */}
        <div className="flex flex-col items-center md:items-end">
          <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-base font-medium mb-6">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#services" className="hover:text-white transition">Services</a></li>
            <li><a href="#blogs" className="hover:text-white transition">Blogs</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/company/bizarcs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/bizarcs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Instagram size={24} />
            </a>
            <a href="https://www.facebook.com/bizarcs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com/bizarcs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
