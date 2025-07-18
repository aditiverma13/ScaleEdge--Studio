import { useState } from "react";

const PricingSection = () => {
  // Track selected product count (1 to 50)
  const [productCount, setProductCount] = useState(1);

  // Dynamic pricing logic
  const starterPrice = Math.round(4000 * (productCount / 50));
  const businessPrice = Math.round(7500 * (productCount / 50));

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* === Section Heading === */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-gray-900">
          Flexible Pricing Tailored to You
        </h2>

        {/* === Pricing Cards === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Starter Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100">
            <h3 className="text-xl text-gray-700 font-semibold mb-4">Starter</h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">${starterPrice}/mo</p>
            <p className="text-gray-600">Perfect for solo creators and small teams starting out with digital products.</p>
          </div>

          {/* Business Plan */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 border border-blue-100">
            <h3 className="text-xl text-gray-700 font-semibold mb-4">Business</h3>
            <p className="text-4xl font-bold text-blue-600 mb-6">${businessPrice}/mo</p>
            <p className="text-gray-600">Designed for growing businesses that need powerful, scalable solutions.</p>
          </div>
        </div>

        {/* === Product Count Range Selector === */}
        <div className="max-w-xl mx-auto mt-8">
          <p className="text-center text-gray-700 font-medium mb-2">
            Selected Products: <span className="text-blue-600 font-semibold">{productCount}</span>
          </p>

          <div className="flex items-center gap-3 px-4">
            <span className="text-sm text-gray-500">1</span>
            <input
              type="range"
              min="1"
              max="50"
              value={productCount}
              onChange={(e) => setProductCount(parseInt(e.target.value))}
              className="flex-1 h-2 bg-blue-100 accent-blue-600 rounded-lg cursor-pointer transition-all duration-300"
            />
            <span className="text-sm text-gray-500">50</span>
          </div>

          {/* === Call to Action Button === */}
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600 mb-4">Ready to scale your growth with us?</p>
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse"
            >
              Get Started
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;

