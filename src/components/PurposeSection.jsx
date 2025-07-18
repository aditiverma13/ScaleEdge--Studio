//components/PurposeSection.jsx

// const features = [
//   {
//     icon: (
//       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
//         <span className="text-white text-lg font-bold">1</span>
//       </div>
//     ),
//     title: "Engineered for Scale",
//     description:
//       "We build robust, scalable platforms that evolve with your business needs, perfect for both startups and enterprises.",
//   },
//   {
//     icon: (
//       <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center shadow-md">
//         <span className="text-white text-lg font-bold">2</span>
//       </div>
//     ),
//     title: "Seamless Collaboration",
//     description:
//       "We align with your workflows, tools, and pace becoming a true extension of your product team.",
//   },
// ];

// const PurposeSection = () => {
//   return (
//     <section className="w-full bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans" id='about'>
//       <div className="max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-3 grid-cols-1 gap-10 items-start">
//           {/* === Section Title === */}
//           <div className="md:col-span-1">
//             <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">Achieve More</p>
//             <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
//               Purpose That Powers <span className="text-blue-600">Performance</span>
//             </h2>
//           </div>

//           {/* === Feature Points (Flat, no cards) === */}
// <div className="md:col-span-2 grid sm:grid-cols-2 gap-10 mt-10 md:mt-0">
//   {features.map((feature, index) => (
//     <div key={index} className="flex items-start gap-4 transition-all duration-300 group">
//       <div className="shrink-0">{feature.icon}</div>
//       <div>
//         {/* Heading: increased from text-lg → text-2xl */}
//         <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
//           {feature.title}
//         </h3>
//         {/* Subheading: increased from text-sm → text-base */}
//         <p className="text-gray-600 text-base mt-2 leading-relaxed">
//           {feature.description}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>


//         </div>
//       </div>
//     </section>
//   );
// };

// export default PurposeSection;


import { motion } from "framer-motion";

// Feature list content
const features = [
  {
    icon: (
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-md">
        <span className="text-white text-lg font-bold">1</span>
      </div>
    ),
    title: "Engineered for Scale",
    description:
      "We build robust, scalable platforms that evolve with your business needs, perfect for both startups and enterprises.",
  },
  {
    icon: (
      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-pink-500 to-orange-400 flex items-center justify-center shadow-md">
        <span className="text-white text-lg font-bold">2</span>
      </div>
    ),
    title: "Seamless Collaboration",
    description:
      "We align with your workflows, tools, and pace becoming a true extension of your product team.",
  },
];

const PurposeSection = () => {
  return (
    <section className="w-full bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 font-sans" id="about">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 items-start">
          
          {/* === Left Section: Title === */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-2">Achieve More</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
              Purpose That Powers <span className="text-blue-600">Performance</span>
            </h2>
          </motion.div>

          {/* === Right Section: Features List === */}
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-10 mt-10 md:mt-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                {/* Icon Bubble */}
                <div className="shrink-0">{feature.icon}</div>

                {/* Feature Text Content */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-base mt-2 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PurposeSection;









