import React, { useState, useEffect } from 'react';
import { useCart } from '../actions/CartControl';
import { useNavigate } from 'react-router-dom';

function BuyCard({ bogo, mrp, discountPrice, imageUrl, productName, discount, id }) {
  const [count, setCount] = useState(0);
  const { addToCart, cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const cartItem = cartItems.find(item => item.id === id);
    if (cartItem) {
      setCount(cartItem.count);
    }
  }, [cartItems, id]);

  return (
    <div className='card w-full flex flex-col border-2 rounded-[15px] relative hover:scale-105 transition-transform duration-300'>
      <div className='bg-slate-200 w-full flex justify-center rounded-t-[15px] cursor-pointer' onClick={() => navigate(`/product/${id}`)}>
        <img 
          src={imageUrl} 
          alt={productName} 
          className="object-contain w-full h-48" // Using object-contain for better aspect ratio handling
          loading="lazy" // Optional: Enables lazy loading for performance
          style={{ maxHeight: '300px', width: 'auto' }} // Ensures max height and maintains aspect ratio
        />
      </div>
      <div className='p-2 flex-1'>
        <span className="flex-grow cursor-pointer hover:underline" onClick={() => navigate(`/product/${id}`)}>{productName}</span>
        {bogo && <span style={{ color: '#54B22C' }}>(Buy 1 Get 1 FREE)</span>}
      </div>
      <div className='flex p-2 justify-between mt-5 w-full'>
        <div>
          {'₹'}{discountPrice || 'Error'} {' '}
          <span className='line-through text-xs'>{'₹'}{mrp || 'Error'}</span>
        </div>
        <div>
          <button
            className="bg-[#F3F9FB] border-2 border-[#54B22C] text-[#249B3E] w-20 rounded"
            onClick={() => {
              setCount(count + 1);
              addToCart({ id, productName, discountPrice, count: count + 1, imageUrl });
            }}
            disabled={count > 0}
          >
            {count === 0 ? 'ADD' : `Added x${count}`}
          </button>
        </div>
      </div>
      <div className='absolute' style={{
        top: '0',
        left: '80%',
        backgroundColor: '#54B22C',
        color: 'white',
        padding: '5px',
        borderRadius: '0 17px 0 15px',
      }}>
        {discount || parseInt((mrp - discountPrice) / mrp * 100) || '$'}% OFF
      </div>
    </div>
  );
}

export default BuyCard;
