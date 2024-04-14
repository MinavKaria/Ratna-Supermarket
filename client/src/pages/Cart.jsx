import React from 'react';
import { useCart } from '../actions/CartControl';
import Payment from '../components/Payment';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartItems, addToCart, removeFromCart, isLogin } = useCart();
  const navigate = useNavigate();
  console.log(cartItems);
  return (
    <div className='mt-48 mx-auto max-w-md p-6 bg-white rounded-lg shadow-md'>
      <h1 className='text-3xl font-semibold mb-4'>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className='text-gray-600'>Your cart is empty.</p>
      ) : (
        <>
        <ul className='divide-y divide-gray-300'>
          {cartItems.map((item) => (
            console.log(item),
            <li key={item.id} className='py-2'>
              <div className='flex items-center justify-between'>
                <div>
                  <h2 className='text-lg font-semibold'>{item.productName}</h2>
                  <p className='text-gray-600'>₹ {item.discountPrice}</p>
                  <p className='text-gray-600'>Quantity: {item.count}</p>
                </div>
                <button
                  className='text-red-600'
                  onClick={() => {
                    console.log('remove item', item);
                    removeFromCart({ id: item.id })
                    }}
                >
                    Remove
                </button>
              </div>
              <hr />
            </li>
          ))}
        </ul>
        <button className="text-white bg-black p-3 rounded-lg mb-5" onClick={()=>{
          if(isLogin){
            navigate('/checkout')
          }
          else{
            navigate('/sign')
          }
        
        }}>
            Proceed to Checkout
       </button>
       </>
      )}
      
    </div>
  );
}

export default Cart;
