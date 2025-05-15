import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    "../assets/carousel/1.png",
    "../assets/carousel/2.png",
    "../assets/carousel/3.png",
    "../assets/carousel/4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2400);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="carousel-item" key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
