import React from 'react';
import BuyCard from './BuyCard';

function BuyCards({ bogo }) {

  const dummyData = [
    { productName: "Product 1", mrp: '200', discountPrice: '150' , bogo: true},
    { productName: "Product 2", mrp: '250', discountPrice: '200' },
    { productName: "Product 3", mrp: '180', discountPrice: '140' },
    { productName: "Product 4", mrp: '150', discountPrice: '120' },
    { productName: "Product 5", mrp: '300', discountPrice: '250' }
  ];

  return (
    <>
      <div className='container mx-auto mt-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {dummyData.map((item, index) => (
            <BuyCard
              key={index}
              bogo={item.bogo}
              productName={item.productName}
              mrp={item.mrp}
              discountPrice={item.discountPrice}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default BuyCards;
