import React from "react";
import { BsStack } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

// === Services Data ===
const services = [
  {
    icon: <BsStack className="w-8 h-8 text-indigo-600" />,
    title: "Web Design",
    description: "One for all and all for one, Muskehounds are always ready.",
    link: "#learn-more"
  },
  {
    icon: <HiLightBulb className="w-8 h-8 text-amber-400" />,
    title: "Ad-Creatives",
    description: "Alphabet Village and the subline of her own road.",
    link: "#learn-more"
  },
  {
    icon: <FiSettings className="w-8 h-8 text-red-400" />,
    title: "Automation",
    description: "Little Blind Text should turn around and return.",
    link: "#learn-more"
  },
  {
    icon: <BiTime className="w-8 h-8 text-cyan-400" />,
    title: "Infographics",
    description: "Nothing the copy said could convince her.",
    link: "#learn-more"
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-white px-4 sm:px-6 lg:px-8" id="services">

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
        
        {/* === LEFT: Heading & Highlights === */}
        <div className="lg:w-1/2 w-full">
          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Future of <br />
            support with <br />
            new shape
          </h2>

          {/* Subheading */}
          <p className="text-gray-600 text-lg mb-6 leading-relaxed sm:pr-12">
            Discuss your goals, determine success metrics, identify problems
          </p>

          {/* Feature Points */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-700">UX design content strategy</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-600"></div>
              </div>
              <span className="text-gray-700">Development bring</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="px-6 py-3 bg-indigo-600 text-white text-base font-medium rounded-full hover:bg-indigo-700 transition-all duration-300">
            Get started
          </button>
        </div>

        {/* === RIGHT: Service Cards === */}
        <div className="lg:w-1/2 w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                style={{ textDecoration: "none" }} // ✅ No underline
              >
                LEARN MORE
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;




