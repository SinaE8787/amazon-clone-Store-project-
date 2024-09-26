import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import canvasData from "./canvasData";
import ProductsProvider from "../../../context/ProductsProvider";
import styles from "./Header.module.css";

function OffcanvasMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const { isAdmin, NameAdmin } = useContext(ProductsProvider);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSubMenu = () => setIsSubMenuOpen(!isSubMenuOpen);

  return (
    <>
      <span className={styles.menuButton} onClick={toggleMenu}>
        ☰ ALL
      </span>
      <div className={`${styles.offcanvas} ${isMenuOpen ? styles.show : ""}`}>
        <div className={styles.userProfile}>
          <button className={styles.usericon}>
            <Link to={isAdmin ? "/Admin" : "/RegisterLogin"}>
              <i className="fa-solid fa-user"></i>
            </Link>
          </button>
          <h3>Hello, {NameAdmin ? NameAdmin : "sign in"}</h3>
        </div>
        <div className={styles.menuContent}>
          <div className={styles.canvesMenu}>
            {canvasData?.map((data, index) => (
              <ul className={styles.canvesList} key={index}>
                {data?.map((list) => (
                  <li
                    className={styles.canvesListData}
                    key={list.id}
                    onClick={list.subMenu && toggleSubMenu}
                  >
                    <p>
                      {list?.img && <img src={list?.img} />}
                      {list?.icon && <i className="fa-solid fa-globe"></i>}
                      {list?.text}
                    </p>
                    {list.title ? (
                      ""
                    ) : (
                      <i className="fa-solid fa-chevron-right"></i>
                    )}
                  </li>
                ))}
              </ul>
            ))}
            <div
              className={`${styles.subOffcanvas} ${
                isSubMenuOpen ? styles.showSubMenu : ""
              }`}
            >
              <div className={styles.subMenuList} onClick={toggleSubMenu}>
                <i className="fa-solid fa-arrow-left"></i>
                Main Menu
              </div>
              <div className={styles.menuContent}>
                <ul>
                  <li>Shop by Department</li>
                  <li>Electronics</li>
                  <li>Computer</li>
                  <li>Smart Home</li>
                  <li>Arts & Crafts</li>
                  <li>See all</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* /////////////////////Overlay \\\\\\\\\\\\\\\\\\\\\\ */}
      {(isMenuOpen || isSubMenuOpen) && (
        <div
          className={styles.overlay}
          onClick={() => {
            setIsMenuOpen(false);
            setIsSubMenuOpen(false);
          }}
        ></div>
      )}
    </>
  );
}

export default OffcanvasMenu;
