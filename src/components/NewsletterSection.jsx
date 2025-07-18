import React from "react";
import { HiArrowRight } from "react-icons/hi"; // ✅ Imported missing icon

const NewsletterSection = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16" id = "newsletter">
      <div className="bg-blue-600 rounded-2xl overflow-hidden relative">
        {/* === Slanted Gradient Background for Right Half === */}
        <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block z-0">
          <div className="w-full h-full bg-blue-700 clip-slant"></div>
        </div>

        {/* === Main Content === */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 md:px-16 px-6 py-16 md:py-24">
          {/* === Left: Heading & Description === */}
          <div className="text-white max-w-lg text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Subscribe Newsletter</h2>
            <p className="text-blue-100 text-sm sm:text-base">
              Best cooks and best delivery guys all at your service. Hot tasty food, delivered fast.
            </p>
          </div>

          {/* === Right: Email Input and Button === */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 w-full sm:w-auto">
  <input
    type="email"
    placeholder="Enter your email address"
    className="w-full sm:w-80 px-4 sm:px-6 py-3 sm:py-4 
               bg-white text-gray-900 
               rounded-xl sm:rounded-l-xl sm:rounded-r-none 
               focus:outline-none"
  />
  <button
    className="bg-indigo-500 text-white px-6 sm:px-8 py-3 sm:py-4 
               rounded-xl sm:rounded-l-none sm:rounded-r-lg 
               flex items-center gap-2 hover:bg-indigo-600 transition-all"
  >
    <span>Discover</span>
    <HiArrowRight className="w-5 h-5" />
  </button>
</div>
        </div>
      </div>

      {/* === Custom Clip Path Styling === */}
      <style>
        {`
          .clip-slant {
            clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        `}
      </style>
    </section>
  );
};

export default NewsletterSection;
