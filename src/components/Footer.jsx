import React from "react";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* === Main Footer Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* === Brand Column === */}
          <div className="col-span-1 lg:col-span-1">
            {/* Brand Logo and Name */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-indigo-600 text-2xl font-bold">✦</span>
              <h2 className="text-xl font-extrabold text-gray-800 tracking-tight">
                ScaleEdge Studio
              </h2>
            </div>

            {/* Description Text */}
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Our mission is to transform ideas into digital products that help businesses grow.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaTwitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* === Company Links Column === */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">How it Works</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* === GetHelp Column === */}
          <div>
            <h3 className="font-semibold mb-4 text-base">GetHelp</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Support Center</a></li>
              <li><a href="#" className="hover:underline">24h Service</a></li>
              <li><a href="#" className="hover:underline">Quick Chat</a></li>
            </ul>
          </div>

          {/* === Support Column === */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Policy</a></li>
              <li><a href="#" className="hover:underline">Business</a></li>
            </ul>
          </div>

          {/* === Contact Column === */}
          <div>
            <h3 className="font-semibold mb-4 text-base">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">WhatsApp</a></li>
              <li><a href="#" className="hover:underline">Support 24</a></li>
            </ul>
          </div>
        </div>

        {/* === Footer Bottom Info (Copyright) === */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-gray-200 text-sm text-gray-500 gap-4 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} ScaleEdge Studio. All rights reserved.</p>
          <p>Created by Aditi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


