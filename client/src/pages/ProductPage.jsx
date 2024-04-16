import React from 'react'
import Carousel from '../components/Carousel'
import CategoriesHead from '../components/TopCategoriesHead'
import TopCategoriesList from '../components/TopCategoriesList'
import BuyCard from '../components/BuyCards'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const { id } = useParams()
  console.log(id)
  return (
    <>
        <div className='mt-[120px] flex'>
        <div className='container mx-auto'>
        <div className='mt-[10vh] flex flex-row gap-[7.5vw] justify-center items-center'>
          <img src='/onion.png' className='w-[50vw] rounded-2xl shadow-2xl'></img>
          <div className='flex flex-col gap-4'>
            <span className='font-black text-[2vw]'>Onions</span>
            <div className='flex flex-col gap-3'>
              <span className='font-[100]'>Variants</span>
              <div className='flex flex-row gap-6'>
                <button className='bg-green-300 text-green-600 px-[2vw] py-[1vh] font-bold shadow-lg shadow-green-200 border-[1px] rounded-lg'>1 kg</button>
                <button className='bg-green-300 text-green-600 px-[2vw] py-[1vh] font-bold shadow-lg shadow-green-200 border-[1px] rounded-lg'>2 kg</button>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <span className='text-[2.5vh]'>Our Price:</span>
              <span className='text-[2.5vh]'>₹22  <span className='text-[2vh] font-[100]'>₹27</span></span>
            </div>
            <span><button className='px-[1.6vw] py-[1.4vh] text-[2.5vh] font-bold text-white flex flex-row gap-3 justify-center align-middle bg-green-500 shadow-lg shadow-green-300 rounded-lg'><img className='w-[1.8vw]' src='/CartWhite.svg'></img>Add to Cart</button></span>
            <span className='font-bold'>Description</span>
            <span>Onion is a root which is almost like a staple in Indian food. This is also known to be one of the essential ingredients of raw salads. They come in different colours like white</span>
            <span className='font-bold'>Origin: <span className='font-normal'>ur house</span></span>
          </div>
        </div>
        </div>
        </div>
        <div>
        <div className='md:mt-24 sm:mt-36 '>
        <span className='font-black text-[2vw] mx-[7vw]'>Explore More Products: </span>
        </div>
        <CategoriesHead title="Shop From" greenTitle="Top Categories"/>
        <TopCategoriesList/>
        <CategoriesHead title="Supersaver" greenTitle="Up to 50% off"/>
        <BuyCard/>
      </div>
    </>
  )
}

export default ProductPage;