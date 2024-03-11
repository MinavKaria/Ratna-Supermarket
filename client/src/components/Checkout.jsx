import React from 'react';
import Payment from './Payment';

function Checkout() {
  return (
    <>
      <div className='mt-[150px] flex mx-auto w-full justify-center items-start h-[]'>
        <div className='w-[300px] p-4 border rounded-md shadow-md flex flex-col-reverse gap-4'>
          <h1>Total Amount: ₹ 106.58</h1>
          <Payment />
        </div>
      </div>
    </>
  );
}

export default Checkout;
