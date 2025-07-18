
import scheduleImage from "../assets/stats.webp";

const ScheduleSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        
        {/* === Left: Image === */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={scheduleImage}
            alt="schedule illustration"
            className="w-full max-w-md h-auto rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>

        {/* === Right: Content === */}
        <div className="md:w-1/2 w-full">
          <p className="text-orange-500 font-semibold uppercase tracking-wide">Schedule</p>

          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mt-4 mb-6 leading-snug">
            Streamline Your Business <br />
            with Smart Scheduling Solutions
          </h2>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            At <span className="font-semibold text-blue-600">ScaleEdge Studio</span>, we believe that timing is everything. 
            Our scheduling workflows are designed to optimize efficiency across product design, development, and deployment. 
            With real-time tracking, milestone visibility, and adaptive planning — we keep your vision on track and deliver 
            results without delay.
          </p>

          {/* === CTA Link === */}
          <a
            href="#"
            className="text-blue-600 font-semibold flex items-center gap-3 transition-all duration-300 group"
          >
            <span className="group-hover:translate-x-1 transition-transform">Explore scheduling features</span>
            <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;




