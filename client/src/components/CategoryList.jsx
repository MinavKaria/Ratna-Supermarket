import React from "react";
import { useParams } from "react-router-dom";
import BuyCard from "./BuyCard";
import productsData from '../data/product.json'// Import products data from JSON file

function CategoryList() {
  const params = useParams();

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    // Handle checkbox change here
    console.log(event.target.checked);
  };

  // Filter card data based on category
  const filteredCardData = productsData.filter((card) => card.category === params.categoryName);

  return (
    <div className="mt-[120px] flex">
      <div className="w-1/5 h-screen overflow-y-auto bg-gray-200 fixed left-0 top-0 bottom-0 z-10 mt-[100px] ">
        {/* Select Company */}
        <div className="h-full">
          <h1 className="text-2xl font-bold p-5 border-b border-gray-300">
            Select Company
          </h1>
          <div className="p-5 overflow-y-auto">
            {[...Array(10).keys()].map((index) => (
              <div key={index} className="flex items-center mb-4">
                <input
                  type="checkbox"
                  id={`company_${index + 1}`}
                  className="mr-2"
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor={`company_${index + 1}`}
                  className="text-lg font-semibold cursor-pointer"
                >
                  Company {index + 1}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="ml-[20%] w-4/5 pl-5 overflow-y-visible ">
        <div className="p-5 grid grid-cols-4 gap-4">
          {filteredCardData.map((card, index) => (
            <BuyCard
              key={index}
              productName={card.productName}
              mrp={card.mrp}
              discountPrice={card.discountPrice}
              bogo={card.bogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
