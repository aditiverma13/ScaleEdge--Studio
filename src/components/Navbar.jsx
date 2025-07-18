import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-md transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16">

        {/* === Logo === */}
        <div className="flex items-center gap-2 cursor-pointer select-none">
          <div className="w-5 h-5 bg-gradient-to-r from-blue-600 to-red-500 rounded-full shadow-md animate-pulse"></div>
          <h1 className="text-xl font-bold tracking-wide text-gray-800 dark:text-white">
            ScaleEdge <span className="text-blue-600">Studio</span>
          </h1>
        </div>

        {/* === Desktop Navigation Links === */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActiveLink(link.href)}
              className={`group relative text-sm font-semibold transition-all duration-300 ${
                activeLink === link.href
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              }`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* === Contact Button === */}
        <a href="#newsletter" className="hidden md:block">
          <button className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:shadow-xl hover:scale-102 transition-all duration-300">
            Contact Us
          </button>
        </a>

        {/* === Mobile Hamburger Icon === */}
        <button
          className="md:hidden text-2xl text-gray-700 transition-transform hover:scale-110"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* === Mobile Menu === */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 transition-all duration-500">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block text-sm font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {link.label}
              </a>
            ))}

            <a href="#newsletter">
              <button className="w-full bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-md hover:bg-blue-700 hover:scale-102 transition-all duration-300">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
 







