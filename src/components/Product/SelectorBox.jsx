import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import ProductsProvider from "../../context/ProductsProvider";
import Pstyles from "./SelectorBox.module.css";

const SelectorBox = ({ basketPage, id, value, setbasketValue }) => {
  const {
    pushProduct,
    setpushProduct,
    findProduct,
    setTotalPrice,
    setTotalQuantity,
    addedToCart,
    setAddedToCart,
    Quantityvalue,
    setQuantityvalue,
    buttonText,
    setButtonText,
    setfinalPrice,
  } = useContext(ProductsProvider);

  useEffect(() => {
    const zarbTotalPrice = pushProduct.reduce(
      (acc, item) => acc + item.value * item.price,
      0
    );

    const jameTotalQuantity = pushProduct.reduce(
      (acc, item) => acc + parseFloat(item.value),
      0
    );
    setTotalPrice(zarbTotalPrice);
    setTotalQuantity(jameTotalQuantity);
  }, [pushProduct]);

  useEffect(() => {
    setQuantityvalue("1");
    basketPage ? setButtonText("Delete") : setButtonText("Add to Cart");
    basketPage ? setAddedToCart(true) : setAddedToCart(false);
  }, []);
  ///////////////////////////////productPage\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const SelectChange = (e) => {
    setQuantityvalue(e.target.value);
    basketPage ? setbasketValue(e.target.value) : "";
    if (addedToCart) {
      basketPage ? setButtonText("Update") : setButtonText("Update Card");
    }
  };

  const AddButtonClicker = () => {
    setfinalPrice(findProduct?.price * Quantityvalue);
    if (buttonText === "Add to Cart") {
      setButtonText("Remove from Cart");
      setAddedToCart(true);
      if (!pushProduct.some((item) => item.id == findProduct.id)) {
        setpushProduct([
          ...pushProduct,
          {
            id: `${findProduct?.id}`,
            name: `${findProduct?.name}`,
            description: `${findProduct?.description}`,
            color: `${findProduct?.Details.color}`,
            price: `${findProduct?.price}`,
            imgUrl: `${findProduct?.imgUrl}`,
            value: `${Quantityvalue}`,
          },
        ]);
      }
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Add to the Cart !",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (buttonText === "Update Card") {
      setButtonText("Remove from Cart");
      setAddedToCart(true);
      setpushProduct((prevArray) =>
        prevArray.map((item) => {
          if (item.id == findProduct.id) {
            if (item.value !== Quantityvalue) {
              return {
                ...item,
                value: `${Quantityvalue}`,
              };
            } else {
              return item;
            }
          }
          return item;
        })
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Cart !",
        showConfirmButton: false,
        timer: 1000,
      });
    } else if (buttonText === "Remove from Cart") {
      setButtonText("Add to Cart");
      setAddedToCart(false);
      setQuantityvalue("1");
      setfinalPrice(0);
      setpushProduct(
        pushProduct.filter((item) => item?.id !== findProduct?.id)
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Remove from Cart",
        showConfirmButton: false,
        timer: 1000,
      });
      ///////////////////for basket page\\\\\\\\\\\\\\\\\\\\\\\\
    } else if (buttonText === "Update") {
      setButtonText("Delete");
      setAddedToCart(true);
      setpushProduct((prevArray) =>
        prevArray.map((item) => {
          if (item.id == id) {
            if (item.value !== Quantityvalue) {
              return {
                ...item,
                value: `${Quantityvalue}`,
              };
            } else {
              return item;
            }
          }
          return item;
        })
      );
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Update Cart !",
        showConfirmButton: false,
        timer: 1000,
      });
    } else {
      setQuantityvalue("1");
      setfinalPrice(0);
      setpushProduct(pushProduct.filter((item) => item?.id !== id));
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Remove from Cart",
        showConfirmButton: false,
        timer: 1000,
      });
    }
  };
  return (
    <div
      className={
        basketPage ? Pstyles.basketPageSeletor : Pstyles.SelectorBoxFather
      }
    >
      <select
        className={Pstyles.selectQuantity}
        value={basketPage ? value : Quantityvalue}
        onChange={SelectChange}
        name="quantity"
        id="quantity"
      >
        {(() => {
          const option = [];
          for (let i = 1; i < 26; i++) {
            option.push(
              <option key={i} value={i}>
                Quantity : {i}
              </option>
            );
          }
          return option;
        })()}
      </select>
      <button
        className={`${
          basketPage ? Pstyles.basketPageAddToCart : Pstyles.addToCart
        } ${basketPage ? "samecolor" : ""} `}
        onClick={AddButtonClicker}
      >
        {basketPage && buttonText == "Remove from Cart" ? "Delete" : buttonText}
      </button>
    </div>
  );
};

export default SelectorBox;
