// ✅ React and Swiper imports
import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ✅ Testimonial data array
const testimonials = [
  {
    id: 1,
    name: "Krishna Yadav",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    id: 2,
    name: "Aditi Verma",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia...",
  },
  {
    id: 3,
    name: "Rowhan Smith",
    image: "https://randomuser.me/api/portraits/men/90.jpg",
    text: "When she reached the first hills of the Mountains, she had a last view back...",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "The customer service has been exceptional. They went above and beyond...",
  },
  {
    id: 5,
    name: "Michael Uday",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I've been using their services for over a year now and couldn't be happier...",
  },
  {
    id: 6,
    name: "Emma Wilson",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    text: "What impressed me most was how quickly they responded to my requests...",
  },
];

const TestimonialSection = () => {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" id = 'testimonials'>
      {/* === Section Header === */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold md:text-4xl mb-4">
          What Our Happy Clients Say
        </h2>
        <p className="text-gray-600">
          Things that make it the best place to start trading
        </p>
      </div>

      {/* === Swiper Carousel === */}
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          spaceBetween={30}
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Pagination]}
          className="testimonial-swiper md:mb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="text-center bg-white p-6 rounded-lg shadow-md h-full flex flex-col items-center">
                {/* User Image */}
                <div className="w-24 h-24 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Star Ratings */}
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm mb-3">{testimonial.text}</p>

                {/* Client Name */}
                <h4 className="font-semibold text-gray-800 mt-auto">{testimonial.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* === Navigation Buttons === */}
        <div className="flex justify-center gap-4 mt-8">
          <button className="swiper-button-prev-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronLeft className="w-6 h-6" />
          </button>
          <button className="swiper-button-next-custom w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer">
            <BsChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
