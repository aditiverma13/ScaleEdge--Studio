// // Hero.jsx
// import heroImage from "../assets/hero-image.png";

// const Hero = () => {
//   return (
//     <section id = "home" className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      
//       {/* Left Column */}
//       <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
//         {/* Badge */}
//         <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm mx-auto md:mx-0 hover:bg-blue-50 transition-all duration-300 group">
//           <span className="text-blue-600 text-xl group-hover:scale-125 transition-transform">📈</span>
//           <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
//             Fuel Your Digital Journey
//           </span>
//         </div>

//         {/* Heading */}
//         <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
//           Empower Your Brand <br className="hidden sm:block" />
//           with <span className="text-blue-600 drop-shadow-sm">ScaleEdge Studio</span>
//         </h1>

//         {/* Subheading */}
//         <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
//           We craft stunning digital experiences that accelerate your business success. Design, develop, and scale with us.
//         </p>

//         {/* Email Form */}
//         <form className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start justify-center">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full sm:w-72 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300"
//             required
//           />
//           <button
//             type="submit"
//             className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-500"
//           >
//             Get Started
//           </button>
//         </form>
//       </div>

//       {/* Right Column */}
//       <div className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12">
//         <div className="relative">
//           <img
//             src={heroImage}
//             alt="hero image"
//             className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { motion } from "framer-motion";
import heroImage from "../assets/hero-image.png";

// Fade-in + slide-up variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {/* === Left Column === */}
      <motion.div
        variants={fadeUp}
        className="w-full md:w-1/2 space-y-8 text-center md:text-left"
      >
        {/* === Badge === */}
        <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full shadow-sm mx-auto md:mx-0 hover:bg-blue-50 transition-all duration-300 group">
          <span className="text-blue-600 text-xl group-hover:scale-125 transition-transform">📈</span>
          <span className="text-sm font-semibold tracking-wide text-gray-700 uppercase">
            Fuel Your Digital Journey
          </span>
        </div>

        {/* === Heading === */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Empower Your Brand <br className="hidden sm:block" />
          with <span className="text-blue-600 drop-shadow-sm">ScaleEdge Studio</span>
        </h1>

        {/* === Subheading === */}
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
          We craft stunning digital experiences that accelerate your business success. Design, develop, and scale with us.
        </p>

        {/* === Email Form === */}
        <form className="flex flex-col sm:flex-row gap-4 items-center sm:justify-start justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 px-4 py-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-4 focus:ring-blue-200 transition-all duration-300"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:scale-105 hover:shadow-xl transition-all duration-300 border border-transparent hover:border-blue-500"
          >
            Get Started
          </button>
        </form>
      </motion.div>

      {/* === Right Column === */}
      <motion.div
        variants={fadeUp}
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="hero image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;






