import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BuyingProduct.module.css";
import SelectorBox from "../Product/SelectorBox";

const BuyingProduct = ({
  id,
  name,
  price,
  color,
  imgUrl,
  description,
  value,
}) => {
  const [basketValue, setbasketValue] = useState(value);
  return (
    <div className={styles.ProductBuyComponnet}>
      <div className={styles.imgProduct}>
        <Link to={`/product/${name}`} className={styles.GoProductPage}>
          <img src={imgUrl} />
        </Link>
      </div>
      <div className={styles.ProductInfo}>
        <h2>{name}</h2>
        <p>{description}</p>
        <h3 className="inStock">In Stock</h3>
        <div className={styles.Gift}>
          <input type="checkbox" />
          <div>
            This will be a gift
            <a className="samecolor"> Learn more</a>
          </div>
        </div>
        <div className={styles.colorName}>
          <h3>Colour name : </h3> <span>{color}</span>
        </div>
        <div className={styles.addAndDelete}>
          <SelectorBox
            basketPage={true}
            id={id}
            value={basketValue}
            setbasketValue={setbasketValue}
          />
          <div className={styles.SaveShare}>
            <span className={styles.space}>|</span>
            <span className="samecolor">Save for later</span>
            <span className={styles.space}>|</span>
            <span className="samecolor">See more like this</span>
            <span className={styles.space}>|</span>
            <span className="samecolor">Share</span>
          </div>
        </div>
      </div>
      <div className={styles.price}>
        <h2>
          <i className="fa-solid fa-dollar-sign"></i>
          {price}
        </h2>
      </div>
    </div>
  );
};

export default BuyingProduct;
