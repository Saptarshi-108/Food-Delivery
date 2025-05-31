import React, { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const path = "/assets/carousel/";
  const images = [1, 2, 3, 4].map((num) => `${path}${num}.png`);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
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
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              onError={(e) => {
                console.error(`Failed to load image: ${image}`);
                e.target.src =
                  "https://seocom.agency/wp-content/uploads/2024/05/Errores-Web-404-403-503-502-401.-Significado-y-soluciones-1.jpg.webp";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
