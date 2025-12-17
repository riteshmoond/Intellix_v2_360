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
  const intervalRef = useRef(null);

  // responsive visibleItems
  const getVisibleItems = () => {
    if (window.innerWidth < 768) return 1; // sm
    if (window.innerWidth < 1024) return 2; // md
    return 4; // lg
  };

  const [visibleItems, setVisibleItems] = useState(getVisibleItems());

  // update visibleItems on resize
  useEffect(() => {
    const handleResize = () => setVisibleItems(getVisibleItems());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-scroll with reset on manual click
  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(nextSlide, 2000); // 2 sec auto-scroll
    };

    startAutoScroll();

    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualNext = () => {
    clearInterval(intervalRef.current);
    nextSlide();
  };

  const handleManualPrev = () => {
    clearInterval(intervalRef.current);
    prevSlide();
  };

  useEffect(() => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const card = slider.querySelector(".carousel-card");
      if (card) {
        const cardWidth = card.offsetWidth + 16; // gap
        slider.scrollTo({
          left: cardWidth * currentIndex,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]);

  return (
    <section className="py-12 bg-white">
      <h2 className=" text-2xl md:text-3xl font-bold text-orange-600 text-center mb-6">
        Our Clients
      </h2>

      <div className="relative w-full px-[50px]">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {items.map((item) => (
           <div
  key={item.id}
  className={`
    carousel-card flex-shrink-0 
    ${visibleItems === 1 ? "w-full" : ""}
    ${visibleItems === 2 ? "w-1/2" : ""}
    ${visibleItems === 4 ? "w-1/4" : ""}
    h-[200px]  bg-white flex flex-col items-center justify-center 
    rounded-xl shadow-md border border-orange-300 text-center
  `}
>
  <img
    src={item.img}
    alt={item.name}
    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32  mb-2 rounded-full"
  />
  <span className="text-orange-600 font-semibold text-base">
    {item.name}
  </span>
</div>

          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={handleManualPrev}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 hover:bg-white text-orange-600 rounded-full p-3 shadow-md"
        >
          &#10094;
        </button>

        <button
          onClick={handleManualNext}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 hover:bg-white text-orange-600 rounded-full p-3 shadow-md"
        >
          &#10095;
        </button>
      </div>
      <br />
      <h6 className="font-bold text-orange-600 text-center mb-6">
       +2000 Other
      </h6>
    </section>
  );
};

export default Carousel;
