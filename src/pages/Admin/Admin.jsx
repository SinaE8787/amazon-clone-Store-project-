import { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Admin.module.css";
import ProductsProvider from "../../context/ProductsProvider";

const Admin = () => {
  const [NameProduct, setNameProduct] = useState("");
  const [ImgProduct, setImgProduct] = useState("");
  const [ShowPrice, setShowPrcie] = useState(false);
  const [PrcieProduct, setPriceProduct] = useState("");
  const [DescriptionProduct, setDeacriptionProduct] = useState("");
  const [DigitalProducts, setDigitalProducts] = useState(false);
  const [DetailNameProduct, setDetailNameProduct] = useState("");
  const [DetailModelProduct, setDetailModelProduct] = useState("");
  const [DetailSizeProduct, setDetailSizeProduct] = useState("");
  const [DetailColorProduct, setDetailColorProduct] = useState("");
  const [DetailHardProduct, setDetailHardProduct] = useState("");
  const [DetailCpuProduct, setDetailCpuProduct] = useState("");
  const [DetailRamProduct, setDetailRamProduct] = useState("");
  const [DetailGraphicProduct, setDetailGraphicProduct] = useState("");
  const { setrender, setisAdmin, NameAdmin, setNameAdmin } =
    useContext(ProductsProvider);
  const AddProduct = () => {
    if (ShowPrice == false && DigitalProducts == false) {
      if (
        NameProduct &&
        ImgProduct &&
        DescriptionProduct &&
        DetailNameProduct &&
        DetailModelProduct &&
        DetailSizeProduct &&
        DetailColorProduct
      ) {
        axios.post("http://localhost:3000/product", {
          name: `${NameProduct}`,
          imgUrl: `${ImgProduct}`,
          description: `${DescriptionProduct}`,
          nonExistenT: true,
          Details: {
            brand: `${DetailNameProduct}`,
            model: `${DetailModelProduct}`,
            size: `${DetailSizeProduct}`,
            color: `${DetailColorProduct}`,
            digitalDetail: false,
          },
        });
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setrender((item) => item + 1);
      } else {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "Please fill in all the fields!",
          showConfirmButton: false,
        });
      }
    } else if (ShowPrice == true && DigitalProducts == false) {
      if (
        NameProduct &&
        ImgProduct &&
        DescriptionProduct &&
        DetailNameProduct &&
        DetailModelProduct &&
        DetailSizeProduct &&
        DetailColorProduct &&
        PrcieProduct
      ) {
        axios.post("http://localhost:3000/product", {
          name: `${NameProduct}`,
          imgUrl: `${ImgProduct}`,
          description: `${DescriptionProduct}`,
          price: `${PrcieProduct}`,
          nonExistenT: false,
          Details: {
            brand: `${DetailNameProduct}`,
            model: `${DetailModelProduct}`,
            size: `${DetailSizeProduct}`,
            color: `${DetailColorProduct}`,
            digitalDetail: false,
          },
        });
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setrender((item) => item + 1);
      } else {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "Please fill in all the fields!",
          showConfirmButton: false,
        });
      }
    } else if (ShowPrice == false && DigitalProducts == true) {
      if (
        NameProduct &&
        ImgProduct &&
        DescriptionProduct &&
        DetailNameProduct &&
        DetailModelProduct &&
        DetailSizeProduct &&
        DetailColorProduct &&
        DetailHardProduct &&
        DetailCpuProduct &&
        DetailRamProduct &&
        DetailGraphicProduct
      ) {
        axios.post("http://localhost:3000/product", {
          name: `${NameProduct}`,
          imgUrl: `${ImgProduct}`,
          description: `${DescriptionProduct}`,
          nonExistenT: true,
          Details: {
            brand: `${DetailNameProduct}`,
            model: `${DetailModelProduct}`,
            size: `${DetailSizeProduct}`,
            color: `${DetailColorProduct}`,
            digitalDetail: true,
            hard: `${DetailHardProduct}`,
            cpu: `${DetailCpuProduct}`,
            ram: `${DetailRamProduct}`,
            graphic: `${DetailGraphicProduct}`,
          },
        });
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setrender((item) => item + 1);
      } else {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "Please fill in all the fields!",
          showConfirmButton: false,
        });
      }
    } else if (ShowPrice == true && DigitalProducts == true) {
      if (
        NameProduct &&
        ImgProduct &&
        DescriptionProduct &&
        DetailNameProduct &&
        DetailModelProduct &&
        DetailSizeProduct &&
        DetailColorProduct &&
        DetailHardProduct &&
        DetailCpuProduct &&
        DetailRamProduct &&
        DetailGraphicProduct &&
        PrcieProduct
      ) {
        axios.post("http://localhost:3000/product", {
          name: `${NameProduct}`,
          imgUrl: `${ImgProduct}`,
          description: `${DescriptionProduct}`,
          nonExistenT: false,
          price: `${PrcieProduct}`,
          Details: {
            brand: `${DetailNameProduct}`,
            model: `${DetailModelProduct}`,
            size: `${DetailSizeProduct}`,
            color: `${DetailColorProduct}`,
            digitalDetail: true,
            hard: `${DetailHardProduct}`,
            cpu: `${DetailCpuProduct}`,
            ram: `${DetailRamProduct}`,
            graphic: `${DetailGraphicProduct}`,
          },
        });
        Swal.fire({
          icon: "success",
          showConfirmButton: false,
          timer: 1000,
        });
        setrender((item) => item + 1);
      } else {
        Swal.fire({
          icon: "error",
          title: "◔◡◔",
          text: "Please fill in all the fields!",
          showConfirmButton: false,
        });
      }
    }
  };
  const resetData = () => {
    setNameProduct("");
    setImgProduct("");
    setPriceProduct("");
    setDeacriptionProduct("");
    setDetailNameProduct("");
    setDetailModelProduct("");
    setDetailSizeProduct("");
    setDetailColorProduct("");
    setDetailHardProduct("");
    setDetailCpuProduct("");
    setDetailRamProduct("");
    setDetailGraphicProduct("");
    setNameAdmin("");
  };
  return (
    <>
      <div className={styles.welcome}>
        <h1>Welcome</h1>
        <div className={styles.LogOutandAdmin}>
          <h2 className={styles.Admin}>
            Admin : <strong>{NameAdmin}</strong>
          </h2>
          <button
            type="button"
            onClick={() => setisAdmin(false)}
            className={styles.LogOut}
          >
            Log Out
          </button>
        </div>
      </div>
      <div className={styles.AddProductBox}>
        <div className={styles.formBox}>
          <h2>Form</h2>
          <form>
            <input
              type="text"
              placeholder="Enter your name :"
              value={NameProduct}
              onChange={(e) => setNameProduct(e.target.value)}
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Enter image URL :"
              value={ImgProduct}
              onChange={(e) => setImgProduct(e.target.value)}
              className={styles.input}
            />
            {ImgProduct && (
              <img src={ImgProduct} className={styles.imagePreview} />
            )}
            <label className={styles.checkboxLabel}>
              Show price:
              <input
                type="checkbox"
                onClick={() => setShowPrcie((prev) => (prev = !prev))}
                className={styles.checkbox}
              />
            </label>
            {ShowPrice && (
              <input
                type="number"
                placeholder="Enter price :"
                value={PrcieProduct}
                onChange={(e) => setPriceProduct(e.target.value)}
                className={styles.input}
              />
            )}
            <textarea
              placeholder="Enter description"
              value={DescriptionProduct}
              onChange={(e) => setDeacriptionProduct(e.target.value)}
              className={styles.textarea}
            ></textarea>
            <label className={styles.checkboxLabel}>
              This is a digital product ?
              <input
                type="checkbox"
                onClick={() => setDigitalProducts((prev) => (prev = !prev))}
                className={styles.checkbox}
              />
            </label>
            <div className={styles.DigitalForm}>
              <input
                type="text"
                placeholder="Brand :"
                value={DetailNameProduct}
                onChange={(e) => setDetailNameProduct(e.target.value)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Model :"
                value={DetailModelProduct}
                onChange={(e) => setDetailModelProduct(e.target.value)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Size :"
                value={DetailSizeProduct}
                onChange={(e) => setDetailSizeProduct(e.target.value)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Color :"
                value={DetailColorProduct}
                onChange={(e) => setDetailColorProduct(e.target.value)}
                className={styles.input}
              />
              {DigitalProducts && (
                <>
                  <input
                    type="text"
                    placeholder="Hard :"
                    value={DetailHardProduct}
                    onChange={(e) => setDetailHardProduct(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Cpu :"
                    value={DetailCpuProduct}
                    onChange={(e) => setDetailCpuProduct(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Ram :"
                    value={DetailRamProduct}
                    onChange={(e) => setDetailRamProduct(e.target.value)}
                    className={styles.input}
                  />
                  <input
                    type="text"
                    placeholder="Graphic :"
                    value={DetailGraphicProduct}
                    onChange={(e) => setDetailGraphicProduct(e.target.value)}
                    className={styles.input}
                  />
                </>
              )}
            </div>
          </form>
          <div className={styles.homeBtn}>
            <button className={styles.Add} onClick={AddProduct}>
              ADD
            </button>
            <button className={styles.reset} onClick={resetData}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
