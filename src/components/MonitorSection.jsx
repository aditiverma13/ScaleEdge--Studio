// Import the monitor image from assets
import monitorCardImg from "../assets/monitor-card.webp";

// Functional component for Monitor Section
const MonitorSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24">
        
        {/* === Right: Image (on the right in large screens) === */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={monitorCardImg}
            alt="monitor illustration"
            className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* === Left: Content (on the left in large screens) === */}
        <div className="md:w-1/2 w-full">
          <p className="text-green-500 font-semibold uppercase tracking-wide">Monitor</p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-4 mb-6 leading-snug">
            Smart Monitoring <br />
            for Scalable Outcomes
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At <span className="text-blue-600 font-semibold">ScaleEdge Studio</span>, we empower businesses to track product performance 
            and development metrics in real time. Our intuitive dashboards and mobile-friendly carousels help you stay informed, 
            make smarter decisions, and accelerate your digital growth — all from one centralized view.
          </p>

          {/* === CTA Link === */}
          <a
            href="#"
            className="text-blue-600 font-semibold flex items-center gap-3 transition-all duration-300 group"
          >
            <span className="group-hover:translate-x-1 transition-transform">Explore Monitoring Tools</span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MonitorSection;

