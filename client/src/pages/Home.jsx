import React from 'react'
import Carousel from '../components/Carousel'
import TopCategoriesHead from '../components/TopCategoriesHead'
import TopCategoriesList from '../components/TopCategoriesList'

function Home() {
  return (
    <>
      <Carousel/>
      <TopCategoriesHead/>
      <TopCategoriesList/>
    </>
  )
}

export default Home