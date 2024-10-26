import React from 'react';
import Carousel from '../components/Carousel';
import CategoriesHead from '../components/TopCategoriesHead';
import TopCategoriesList from '../components/TopCategoriesList';
import BuyCard from '../components/BuyCards';
import ChatbotHelp from '../components/ChatbotHelp';

function Home() {
  return (
    <>
      <section className='md:mt-24 sm:mt-36'>
        {/* Carousel for displaying featured products or offers */}
        <Carousel />
      </section>
      
      {/* Top Categories Section */}
      <section>
        <CategoriesHead 
          title="Shop From" 
          greenTitle="Top Categories" 
          href="client/src/components/GoogleLoginButton.jsx" 
        />
        <TopCategoriesList />
      </section>

      {/* Supersaver Offers Section */}
      <section>
        <CategoriesHead 
          title="Supersaver" 
          greenTitle="Up to 50% off" 
          href="client/src/components/TopCategoriesList.jsx" 
        />
        <BuyCard />
      </section>

      {/* Chatbot Help */}
      <ChatbotHelp />
    </>
  );
}

export default Home;
