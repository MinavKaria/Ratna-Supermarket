import React from "react";
import BuyCard from "./BuyCard";
import './BuyPage.css';

function BuyCards({ bogo }) {
  const dummyData = [
    { id: 1, productName: "Product 1", mrp: "200", discountPrice: "150", bogo: true },
    { id: 2, productName: "Product 2", mrp: "250", discountPrice: "200" },
    { id: 3, productName: "Product 3", mrp: "180", discountPrice: "140" },
    { id: 4, productName: "Product 4", mrp: "150", discountPrice: "120" },
    { id: 5, productName: "Product 5", mrp: "300", discountPrice: "250" },
  ];

  return (
    <>
      <div className="mt-5 px-10">
        <div className="container mx-auto mt-5 flex justify-start items-center">
          <div className="grid-box">
            {dummyData.map((item, index) => (
              <BuyCard
                id={item.id}
                key={index}
                bogo={item.bogo}
                productName={item.productName}
                mrp={item.mrp}
                discountPrice={item.discountPrice}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BuyCards;
