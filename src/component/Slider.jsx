// Carousel.jsx
import React, { useEffect, useRef, useState } from "react";

const items = [
  { id: 1, name: "JavaScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 2, name: "React", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 3, name: "Vue.js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 4, name: "WebComponents", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 5, name: "Webflow", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 6, name: "Node.js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 7, name: "TypeScript", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 8, name: "Next.js", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 9, name: "Tailwind", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
  { id: 10, name: "Firebase", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7TWJdR4Q_3jl2pbtUtF0fR4TagJrr4k69RQ&s" },
];

const Carousel = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-scroll every 1 second
  useEffect(() => {
    const interval = setInterval(nextSlide, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll smoothly
  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const cardWidth = slider.firstChild.offsetWidth + 16; // gap
      slider.scrollTo({
        left: cardWidth * currentIndex,
        behavior: "smooth",
      });
    }
  }, [currentIndex]);

  return (
    <section className="py-12 bg-orange-50">
         {/* Section Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-orange-600 text-center mt-6">
        Our Clients
      </h2>
      <div className="relative w-full overflow-hidden px-4 ">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 transition-all duration-500 overflow-x-hidden justify-center"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] h-[120px] sm:h-[140px] md:h-[160px] lg:h-[180px]
                         bg-white flex flex-col items-center justify-center rounded-full shadow-lg border border-orange-200 text-center"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain mb-2"
              />
              <span className="text-orange-600 font-semibold text-sm sm:text-base md:text-lg">
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white text-orange-600 rounded-full p-3 shadow-md"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white text-orange-600 rounded-full p-3 shadow-md"
        >
          &#10095;
        </button>
      </div>

     
    </section>
  );
};

export default Carousel;
