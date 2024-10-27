import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';
import BuyCard from './BuyCard';
import './BuyPage.css';

const BuyCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

  const dummyData = [
    { id: 100, productName: "B Natural Mixed Fruit Juice", mrp: "200", discountPrice: "150", bogo: true, imageUrl: "juice.svg" },
    { id: 101, productName: "Fit Hen Fruit White Protein Rich Eggs", mrp: "250", discountPrice: "200", imageUrl: "eggs.png" },
    { id: 102, productName: "Go get cheesy Cheese Slices 200 g", mrp: "180", discountPrice: "140", imageUrl: "Go_cheese.png" },
    { id: 105, productName: "Sweet Soan Papdi by Charlie's 200 g", mrp: "150", discountPrice: "120", imageUrl: "soan_papdi.png" },
    { id: 106, productName: "Cremica Chocolate Thicker Syrup", mrp: "300", discountPrice: "250", imageUrl: "chocolate_syrup.png" },
  ];

  const productWidth = isSmallScreen ? 100 : 33.33; // 3 cards visible on larger screens

  const nextProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (dummyData.length + 2)); // Update for seamless cycling
  };

  const prevProduct = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + (dummyData.length + 2)) % (dummyData.length + 2)); // Update for seamless cycling
  };

  useEffect(() => {
    const timer = setInterval(nextProduct, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Products</h2>
        <div className="relative flex justify-center items-center">
          <button
            onClick={prevProduct}
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 rounded-full p-2 shadow-md bg-white hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <div className="overflow-hidden w-full max-w-4xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 100) / 3}%)`,
              }}
            >
              {/* Duplicating the items for continuous scrolling */}
              {dummyData.map((item) => (
                <div
                  key={item.id}
                  className="flex-shrink-0 w-1/3 px-2"
                >
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
              {dummyData.map((item) => (  // Duplicate items to create continuous effect
                <div
                  key={`duplicate-${item.id}`}
                  className="flex-shrink-0 w-1/3 px-2"
                >
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
            onClick={nextProduct}
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 rounded-full p-2 shadow-md bg-white hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuyCards;
