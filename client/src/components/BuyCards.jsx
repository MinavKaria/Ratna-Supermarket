import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import BuyCard from './BuyCard';
import './BuyPage.css';

const BuyCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  const dummyData = [
    { id: 100, productName: "B Natural Mixed Fruit Juice", mrp: "200", discountPrice: "150", bogo: true, imageUrl: "juice.svg" },
    { id: 101, productName: "Hen Fruit White Protein Rich Eggs", mrp: "250", discountPrice: "200", imageUrl: "eggs.png" },
    { id: 102, productName: "Go Cheese Slices 200 g", mrp: "180", discountPrice: "140", imageUrl: "Go_cheese.png" },
    { id: 105, productName: "Soan Papdi by Charlie's 200 g", mrp: "150", discountPrice: "120", imageUrl: "soan_papdi.png" },
    { id: 106, productName: "Cremica Chocolate Thicker Syrup", mrp: "300", discountPrice: "250", imageUrl: "chocolate_syrup.png" },
  ];

  const extendedData = [...dummyData, ...dummyData , ...dummyData]; // Double data for seamless looping
  const productWidth = isSmallScreen ? 100 : 100 / 3;

  const nextProduct = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, []);

  const prevProduct = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
  }, []);

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (currentIndex >= dummyData.length) {
      setCurrentIndex(0); // Reset to start for seamless loop
    } else if (currentIndex < 0) {
      setCurrentIndex(dummyData.length - 1); // Reset to end if going back
    }
  };

  useEffect(() => {
    const timer = setInterval(nextProduct, 5000);
    return () => clearInterval(timer);
  }, [nextProduct]);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * productWidth}%)`,
                transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {extendedData.map((item, index) => (
                <div key={index} className={`w-full ${isSmallScreen ? 'flex-shrink-0' : 'sm:w-1/3 flex-shrink-0'} px-1`}>
                  <BuyCard
                    id={item.id}
                    bogo={item.bogo}
                    productName={item.productName}
                    mrp={item.mrp}
                    discountPrice={item.discountPrice}
                    imageUrl={'/' + item.imageUrl}
                  />
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevProduct}
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full p-2 shadow-md ml-1 bg-white hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextProduct}
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full p-2 shadow-md mr-1 bg-white hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyCards;
