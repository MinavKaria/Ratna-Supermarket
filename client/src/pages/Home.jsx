import Carousel from "../components/Carousel";
import CategoriesHead from "../components/TopCategoriesHead";
import TopCategoriesList from "../components/TopCategoriesList";
import BuyCard from "../components/BuyCards";

function Home() {
  return (
    <>
      <div>
        <div className="md:mt-24 sm:mt-36 ">
          <Carousel />
        </div>
        <CategoriesHead title="Shop From" greenTitle="Top Categories" />
        <TopCategoriesList />
        <CategoriesHead title="Supersaver" greenTitle="Up to 50% off" />
        <BuyCard />
      </div>
    </>
  );
}

export default Home;
