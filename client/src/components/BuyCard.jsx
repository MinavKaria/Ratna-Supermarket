import React, { useState, useEffect } from 'react';
import { useCart } from '../actions/CartControl';
import { useNavigate } from 'react-router-dom';

function BuyCard({ bogo, mrp, discountPrice, imageUrl, productName, discount, id, cart, setCart, setTotal, total, vendorSide }) {
  const [count, setCount] = useState(0);
  const [isSaved, setIsSaved] = useState(false); // New state for saved items
  const { addToCart, removeFromCart, cartItems } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const cartItem = cartItems.find(item => item.id === id);
    if (cartItem) {
      setCount(cartItem.count);
    }

    // Check if this item is already saved (could be fetched from localStorage)
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];
    const itemIsSaved = savedItems.some(item => item.id === id);
    setIsSaved(itemIsSaved);
  }, [cartItems, id]);

  const handleSave = () => {
    const productToSave = { id, productName, discountPrice, imageUrl };
    const savedItems = JSON.parse(localStorage.getItem('savedItems')) || [];

    if (isSaved) {
      // Logic to remove the item from saved items
      const updatedSavedItems = savedItems.filter(item => item.id !== id);
      localStorage.setItem('savedItems', JSON.stringify(updatedSavedItems));
      setIsSaved(false);
    } else {
      // Logic to save the item
      localStorage.setItem('savedItems', JSON.stringify([...savedItems, productToSave]));
      setIsSaved(true);
    }
  };

  return (
    <div className='card w-56 flex justify-center align-middle flex-col border-2 rounded-[15px] relative hover:scale-105 transition transform ease-in-out duration-300'>
      <div className='bg-slate-200 w-full flex justify-center rounded-t-[15px] align-top cursor-pointer' onClick={() => {
        navigate(`/product/${id}`);
      }}>
        <img src={imageUrl} alt="" />
      </div>
      <div className='p-2 flex-1'>
        <span className="flex-grow cursor-pointer hover:underline" onClick={() => {
          navigate(`/product/${id}`);
        }}>{productName}</span>
        <span style={{ color: '#54B22C' }}>{bogo && '(Buy 1 Get 1 FREE)'}</span>
      </div>
      <div className='flex p-2 justify-between mt-5 w-full'>
        <div>
          {'₹'}{discountPrice || 'Error'}{' '}
          <span className='line-through text-xs'>{'₹'}{mrp || 'Error'}</span>
        </div>
        {/* Save Button */}
        <div className='mr-2'>
          <button onClick={handleSave} style={{
            backgroundColor: isSaved ? '#FFC107' : '#F3F9FB',
            borderColor: '#54B22C',
            color: '#249B3E',
            width: '60px',
            borderRadius: '5px',
            border: '1px solid',
          }}>
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        {!vendorSide && (count === 0 && (
          <div className='mr-2' onClick={() => {
            setCount(count + 1);
            addToCart({ id, productName, discountPrice, count: count + 1, imageUrl });
          }}>
            <button style={{
              backgroundColor: '#F3F9FB',
              borderColor: '#54B22C',
              color: '#249B3E',
              width: '60px',
              borderRadius: '5px',
              border: '1px solid',
            }}>ADD</button>
          </div>
        ))}
        {count > 0 && (
          <div className='mr-2 flex gap-2'>
            <span style={{ cursor: 'pointer', marginTop: '1px', userSelect: 'none' }} onClick={() => {
              if (count >= 1 && count < 10) setCount(count + 1);
              addToCart({ id, productName, discountPrice, imageUrl, count: count + 1 });
            }}>+</span>
            <div><input type="text" className='w-6 border-2 indent-1' value={count} readOnly /></div>
            <span style={{ cursor: 'pointer', marginTop: '1px', userSelect: 'none' }} onClick={() => {
              if (count >= 1) {
                setCount(count - 1);
                removeFromCart({ id });
              }
            }}> - </span>
          </div>
        )}
      </div>
      <div className='absolute' style={{ top: '0', left: '80%', backgroundColor: '#54B22C', color: 'white', padding: '5px', borderRadius: '0 17px 0 15px' }}>
        {discount || parseInt((mrp - discountPrice) / mrp * 100) || '$'}% OFF
      </div>
    </div>
  );
}

export default BuyCard;
