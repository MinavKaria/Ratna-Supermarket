import React, { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = ['/carousel.png', '/carousel.png', '/carousel.png', '/carousel.png', '/search.png'];

  const goToPrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToIndex = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative w-full">
      <div className="relative h-full overflow-hidden rounded-lg md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-200 ease-linear ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToPrev}
      >
        <span className="text-2xl">&lt;</span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={goToNext}
      >
        <span className=" text-2xl">&gt;</span>
      </button>
    </div>
  );
};

export default Carousel;
