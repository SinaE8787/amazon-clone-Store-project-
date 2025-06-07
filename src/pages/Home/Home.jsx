import { useContext } from "react";
import Mstyles from "./Home.module.css";
import ProductsProvider from "../../context/ProductsProvider";
import Products from "../../components/Products/Products";
import { SwiperBox } from "../../components/UI/Swiper/SwiperBox";
const Home = () => {
  const { cardsData, Search } = useContext(ProductsProvider);
  return (
    <div className={Mstyles.Main}>
      <div className={Mstyles.swiper}>
        <SwiperBox />
      </div>
      <div className={Mstyles.MainMenu}>
        <div className={Mstyles.justText}>
          You are on amazon.com. You can also shop on Amazon Iran for millions
          of products with fast local delivery. Click here to go to
          <a className="samecolor">amazon.de</a>
        </div>
        <div className={Mstyles.productMenu}>
          {cardsData ? (
            cardsData
              ?.filter((item) => {
                return Search == "" ? item : item.name.includes(Search);
              })
              .map((data) => <Products key={data.id} {...data} />)
          ) : (
            <div className={Mstyles.loading}>
              {" "}
              please wait to fetch data . . . that take a few second
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
