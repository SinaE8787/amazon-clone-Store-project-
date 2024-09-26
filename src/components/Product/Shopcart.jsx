import { useContext, useEffect, useState } from "react";
import Pstyles from "./Shopcart.module.css";
import SelectorBox from "./SelectorBox";
import ProductsProvider from "../../context/ProductsProvider";
const Shopcart = ({ price }) => {
  useEffect(() => {
    setfinalPrice(0);
  }, []);
  const [cartSeemore, setcartSeemore] = useState(false);
  const { finalPrice, setfinalPrice, location } = useContext(ProductsProvider);
  return (
    <div className={Pstyles.Cart}>
      <div className={Pstyles.topCart}>
        <span>Buy new :</span>
        <span></span>
      </div>
      <div className={Pstyles.price}>
        <div>
          <i className="fa-solid fa-dollar-sign"></i>
          <h1>{finalPrice ? finalPrice : price}</h1>
          99
        </div>
      </div>
      <p className={Pstyles.extraMoney}>
        <i className="fa-solid fa-dollar-sign"></i>91.31 Shipping & Import Fees
        Deposit to Germany Details Delivery
        <span>Wednesday, May 15</span>
      </p>
      <div className={Pstyles.deliver}>
        <i className="fa-solid fa-location-dot"></i>
        <span className={Pstyles.samecolor}>Deliver To</span>
        {location ? location : "Iran"}
      </div>
      <h3 className="inStock">In Stock</h3>
      <div className={Pstyles.selectAdd}>
        <SelectorBox />
      </div>
      <ul
        className={`${Pstyles.linkList} ${
          cartSeemore ? Pstyles.Morelinks : ""
        }`}
      >
        <li>
          <span>Ships from</span>
          <span>Amazon.com</span>
        </li>
        <li>
          <span>Sold by</span>
          <span>Amazon.com</span>
        </li>
        <li>
          <span>Returns</span>
          <span className={Pstyles.samecolor}>
            Eligible for
            <br /> Return, Refund or Replacement <br /> within 30 days of
            <br />
            receipt
          </span>
        </li>
        <li>
          <span>Payments</span>
          <span className={Pstyles.samecolor}>Secure transaction</span>
        </li>
        <li>
          <span>Support</span>
          <span className={Pstyles.samecolor}>
            Product support <br /> included
          </span>
        </li>
      </ul>
      <div
        className={Pstyles.samecolor}
        onClick={() => setcartSeemore((see) => (see = !see))}
      >
        {cartSeemore ? "See less" : "See more"}
      </div>
    </div>
  );
};

export default Shopcart;
