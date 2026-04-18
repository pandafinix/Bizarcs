import { Link } from "react-router-dom";

const Navbar = ({ activeSection }) => {
  return (
    <nav className="sticky top-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Bizarcs</h1>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#home"
            className={`hover:text-blue-600 transition ${
              activeSection === "home" ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`hover:text-blue-600 transition ${
              activeSection === "about" ? "text-blue-700 font-semibold" : ""
            }`}
          >
            About
          </a>
          <a
            href="#services"
            className={`hover:text-blue-600 transition ${
              activeSection === "services" ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Services
          </a>
          <a
            href="#blogs"
            className={`hover:text-blue-600 transition ${
              activeSection === "blogs" ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Blogs
          </a>
          <a
            href="#news"
            className={`hover:text-blue-600 transition ${
              activeSection === "news" ? "text-blue-700 font-semibold" : ""
            }`}
          >
            News
          </a>
          <Link
            to="/careers"
            className="hover:text-blue-600 transition"
          >
            Careers
          </Link>
          <a
            href="#contact"
            className={`hover:text-blue-600 transition ${
              activeSection === "contact" ? "text-blue-700 font-semibold" : ""
            }`}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;