import React from 'react';
import { useCart } from '../actions/CartControl';
import Payment from '../components/Payment';

function Cart() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <div className='mt-48 mx-auto max-w-md p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-4'>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className='text-gray-600'>Your cart is empty.</p>
      ) : (
        <>
        <ul className='divide-y divide-gray-300'>
          {cartItems.map((item) => (
            <li key={item.id} className='py-2'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-lg font-semibold'>{item.name}</h2>
                  <p className='text-gray-600'>{item.price}</p>
                </div>
                <button
                  className='text-red-600'
                  onClick={() => {
                    console.log('remove item', item);
                    removeFromCart(item)
                    }}
                >
                    Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="text-white bg-black p-3 rounded-lg mb-5">
            Proceed to Checkout
       </button>
       <Payment/>
       </>
      )}
      
    </div>
  );
}

export default Cart;
