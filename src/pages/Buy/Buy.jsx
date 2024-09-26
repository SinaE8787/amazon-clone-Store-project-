import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Bstyles from "./Buy.module.css";
import ProductsProvider from "../../context/ProductsProvider";
import BuyingProduct from "../../components/Buyingproduct/BuyingProduct";

const Buy = () => {
  const {
    pushProduct,
    setpushProduct,
    setAddRemove,
    totalQuantity,
    setTotalQuantity,
    totalPrice,
  } = useContext(ProductsProvider);
  return (
    <div className={Bstyles.ShopingBasket}>
      {pushProduct.length > 0 ? (
        <div className={Bstyles.BuyPrioductsBox}>
          <div className={Bstyles.BuyPrioducts}>
            <div className={Bstyles.topTitle}>
              <h1>Shopping Basket</h1>
              <div
                className="samecolor"
                onClick={() => {
                  setpushProduct([]);
                  setTotalQuantity(0);
                  setAddRemove("Remove from Cart");
                }}
              >
                Deselect all items
              </div>
            </div>
            <div className={Bstyles.product}>
              <div className={Bstyles.productCoponnet}>
                {pushProduct?.map((data) => (
                  <BuyingProduct key={data?.id} {...data} />
                ))}
              </div>
              <div className={Bstyles.finalPrice}>
                <span>Subtotal ({totalQuantity} item) :</span>
                <h2>
                  {" "}
                  <i className="fa-solid fa-dollar-sign"></i>
                  {totalPrice}
                </h2>
              </div>
            </div>
          </div>
          <div className={Bstyles.CheckOut}>
            <div className={Bstyles.CheckOutBox}>
              <div className={Bstyles.finalPriceBox}>
                <span>Subtotal ({totalQuantity} item) :</span>
                <h2>
                  <i className="fa-solid fa-dollar-sign"></i>
                  {totalPrice}
                </h2>
              </div>
              <div className={Bstyles.Gift}>
                <input type="checkbox" />
                <div>
                  This will be a gift
                  <a className="samecolor"> Learn more</a>
                </div>
              </div>
              <button className={Bstyles.BtnCheckOut}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={Bstyles.notingForSell}>
          {setTotalQuantity(0)}
          <h1>Your Amazon Basket is empty.</h1>
          <div>
            <span>Check products page for shopping.</span>
            <Link className={Bstyles.backToHome} to="/">
              continue shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Buy;
