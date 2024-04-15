import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
  const { id } = useParams()
  console.log(id)
  return (
    <>
        <div className='mt-[120px] flex justify-center'>
        <div className='container mx-auto'>
        Product Page initializing
        <br />
        {id}
        </div>
        </div>
       
    </>
  )
}

export default ProductPage;