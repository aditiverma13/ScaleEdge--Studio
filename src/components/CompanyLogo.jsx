// import slack from "../assets/slack.png";
// import amazon from "../assets/amazon.png";
// import woocommerce from "../assets/woocommerce.png";
// import meundies from "../assets/meundies.png";
// import sitepoint from "../assets/sitepoint.png";

// const CompanyLogo = () => {
//   const logos = [slack, amazon, woocommerce, meundies, sitepoint];

//   return (
//     <div className="w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="max-w-screen-xl mx-auto flex items-center gap-6 relative">
        
//         {/* === Fixed Badge on the Left === */}
//         <div className="min-w-[220px] sm:min-w-[250px] bg-white text-gray-700 text-sm sm:text-base font-semibold border-l-4 border-blue-600 shadow-md px-5 py-3 rounded-r-md z-10">
//           Trusted by Innovators <br /> Worldwide
//         </div>

//         {/* === Marquee Logos to the Right === */}
//         <div className="overflow-hidden w-full">
//           <div className="flex animate-marquee whitespace-nowrap gap-16">
//             {logos.concat(logos).map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt="company logo"
//                 className="h-10 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CompanyLogo;

import { motion } from "framer-motion";
import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

// Animation for logo scrolling horizontally (marquee effect)
const marqueeVariants = {
  animate: {
    x: [0, -1000], // change this based on actual width
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const CompanyLogo = () => {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];

  return (
    <section className="w-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto flex items-center gap-6 relative">

        {/* === Static Label Section === */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="min-w-[220px] sm:min-w-[250px] bg-white text-gray-700 text-sm sm:text-base font-semibold border-l-4 border-blue-600 shadow-md px-5 py-3 rounded-r-md z-10"
        >
          Trusted by Innovators <br /> Worldwide
        </motion.div>

        {/* === Animated Logo Marquee === */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-16"
            variants={marqueeVariants}
            animate="animate"
          >
            {/* Doubled array to create seamless loop */}
            {logos.concat(logos).map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="company logo"
                className="h-10 w-36 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyLogo;





