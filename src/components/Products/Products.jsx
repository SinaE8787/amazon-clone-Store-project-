import { Link } from "react-router-dom";
import Cstyles from "./Products.module.css";
const Products = ({
  name,
  id,
  imgUrl,
  price,
  lastPrice,
  description,
  nonExistenT,
  star,
}) => {
  return (
    <div className={Cstyles.Cards}>
      <Link className={Cstyles.Link} to={`/Product/${name}`}>
        <div className={Cstyles.imgCard}>
          <img src={imgUrl} />
        </div>
        <div className={Cstyles.bottomCard}>
          <h3 className={Cstyles.Title}>{name}</h3>
          <div className={Cstyles.Price}>
            {nonExistenT ? (
              <h2>non-Existent</h2>
            ) : (
              <>
                <span className={Cstyles.newPrice}>
                  <i className="fa-solid fa-dollar-sign"></i>
                  <h2>{price}</h2>99
                </span>
                {lastPrice && (
                  <span className={Cstyles.lastPrice}>
                    <i className="fa-solid fa-dollar-sign"></i>
                    {lastPrice}
                  </span>
                )}
              </>
            )}
          </div>
          <p className={Cstyles.description}>{description}</p>
          <div className={Cstyles.rating}>
            <i
              className="fa-solid fa-star-half-stroke fa-lg"
              style={{ color: "#FFD43B" }}
            ></i>
            {star ? star : "0"}
          </div>
          <div className={Cstyles.seeMore}>see More...</div>
        </div>
      </Link>
    </div>
  );
};

export default Products;
