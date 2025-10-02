import React from "react";

export function Carousel({ children, className = "", ...props }) {
  return (
    <div className={`carousel ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CarouselContent({ children, className = "", ...props }) {
  return (
    <div className={`carousel-content ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CarouselItem({ children, className = "", ...props }) {
  return (
    <div className={`carousel-item ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CarouselNext({ children = "Next", className = "", ...props }) {
  return (
    <button className={`carousel-next ${className}`} {...props}>
      {children}
    </button>
  );
}

export function CarouselPrevious({ children = "Previous", className = "", ...props }) {
  return (
    <button className={`carousel-previous ${className}`} {...props}>
      {children}
    </button>
  );
}
