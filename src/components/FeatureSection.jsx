
//FeatureSection.jsx

// const features = [
//   {
//     icon: "🚀",
//     title: "Boost Your Reach",
//     description: "Expand your digital footprint by partnering with ScaleEdge Studio’s expert solutions."
//   },
//   {
//     icon: "🤝",
//     title: "Build Client Trust",
//     description: "Leverage our credibility and experience to earn the confidence of your clients."
//   },
//   {
//     icon: "📈",
//     title: "Drive Conversions",
//     description: "Use our conversion-focused designs and platforms to grow your client’s businesses rapidly."
//   }
// ];

// const FeatureSection = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-4 py-20 font-sans">
//       {/* === Heading Text === */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
//           Partner Benefits at a Glance
//         </h2>
//         <p className="text-gray-600 text-base max-w-xl mx-auto">
//           When you partner with ScaleEdge Studio, you unlock trust, impact, and consistent growth.
//         </p>
//       </div>

//       {/* === Feature Boxes === */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
//           >
//             <div className="w-20 h-20 mb-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
//               {feature.icon}
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
//             <p className="text-gray-600 text-sm">{feature.description}</p>
//           </div>
//         ))}
//       </div>

//       {/* === CTA Button === */}
//       <div className="text-center mt-12 relative">
//         <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative z-10">
//           Become a Partner
//         </button>
//         <div className="absolute inset-0 rounded-full bg-blue-600/40 blur-xl -z-10 w-[200px] h-[60px] mx-auto"></div>
//       </div>
//     </section>
//   );
// };

// export default FeatureSection;
import { motion } from "framer-motion";

// Feature data
const features = [
  {
    icon: "🚀",
    title: "Boost Your Reach",
    description: "Expand your digital footprint by partnering with ScaleEdge Studio’s expert solutions."
  },
  {
    icon: "🤝",
    title: "Build Client Trust",
    description: "Leverage our credibility and experience to earn the confidence of your clients."
  },
  {
    icon: "📈",
    title: "Drive Conversions",
    description: "Use our conversion-focused designs and platforms to grow your client’s businesses rapidly."
  }
];

const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20 font-sans">
      
      {/* === Animated Section Heading === */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          Partner Benefits at a Glance
        </h2>
        <p className="text-gray-600 text-base max-w-xl mx-auto">
          When you partner with ScaleEdge Studio, you unlock trust, impact, and consistent growth.
        </p>
      </motion.div>

      {/* === Animated Feature Boxes === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition-shadow duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mb-5 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* === CTA Button with slight float effect === */}
      <motion.div
        className="text-center mt-12 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors relative z-10">
          Become a Partner
        </button>
        <div className="absolute inset-0 rounded-full bg-blue-600/40 blur-xl -z-10 w-[200px] h-[60px] mx-auto"></div>
      </motion.div>
    </section>
  );
};

export default FeatureSection;



