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
      
      <div className="ml-[20%] w-4/5 pl-5 overflow-y-visible ">
      <h2 className=" font-bold capitalize text-2xl ">{params.categoryName}</h2>
        <div className="p-5 grid grid-cols-4 gap-4">
          {filteredCardData.map((card, index) => (
            <BuyCard
              key={index}
              productName={card.productName}
              mrp={card.mrp}
              discountPrice={card.discountPrice}
              bogo={card.bogo}
              imageUrl={card.imageUrl}
            />
          ))}
          {filteredCardData.length === 0 && <h2>No products found</h2>}
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
