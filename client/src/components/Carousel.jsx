import React, { useState, useRef } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const carouselRef = useRef(null);

  const images = ['/carousel.png', '/carousel2.png', '/carousel3.png', '/carousel.png'];

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX;

      if (deltaX > 50) {
        goToPrev(); // Swipe right, go to the previous image
      } else if (deltaX < -50) {
        goToNext(); // Swipe left, go to the next image
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className="relative w-full"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={carouselRef}
    >
      <div className="relative h-[40vh] overflow-hidden rounded-lg w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full transition-opacity duration-200 ease-linear ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-4 h-4 rounded-full bg-white dark:bg-gray-800/30 focus:outline-none ${
              index === activeIndex ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
      <div className="absolute top-0 h-[40vh] w-full">
        <button
          type="button"
          className="absolute top-0 start-0 md:flex sm:hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToPrev}
        >
          <span className="text-2xl">&lt;</span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 md:flex sm:hidden items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={goToNext}
        >
          <span className="text-2xl">&gt;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
