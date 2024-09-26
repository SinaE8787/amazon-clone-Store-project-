import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ProductsProvider from "../../../context/ProductsProvider";
import OffcanvasMenu from "./OffcanvasMenu";
import flagimg from "../../../assets/images/flag-australia.png";
import logoimg from "../../../assets/images/Logo.png";
import basketimg from "../../../assets/images/imgbasket.png";
import Hstyles from "./Header.module.css";
const Header = () => {
  const [isDropdownLogin, setIsDropdownLogin] = useState(false);
  const [IsDropdownLanguage, setIsDropdownLanguage] = useState(false);
  const [isfocus, setisfocus] = useState(false);

  const { totalQuantity, Search, setSearch, isAdmin, location } =
    useContext(ProductsProvider);
  return (
    <div>
      <header className={Hstyles.header}>
        <div
          className={
            isfocus || isDropdownLogin || IsDropdownLanguage
              ? Hstyles.mesal
              : ""
          }
        ></div>
        <div className={Hstyles.topHead}>
          <div className={Hstyles.logo}>
            <Link to="/">
              <img src={logoimg} alt="Amazon Logo" />
            </Link>
          </div>
          <div className={Hstyles.option}>
            <span className={Hstyles.optionLineOne}>Deliver To</span>
            <span className={Hstyles.optionLineTwo}>
              <i className="fa-solid fa-location-dot"></i>{" "}
              {location ? location : "Iran"}
            </span>
          </div>
          <form
            className={`${Hstyles.searchBox} ${isfocus ? Hstyles.onfocus : ""}`}
          >
            <input
              type="text"
              value={Search}
              onFocus={() => setisfocus(true)}
              onBlur={() => setisfocus(false)}
              onChange={(e) => setSearch(e.target.value)}
              className={Hstyles.searchInput}
              placeholder="search amazon"
            />
            <button className={Hstyles.searchButton}>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <nav className={Hstyles.nav}>
            <div
              className={Hstyles.option}
              onMouseEnter={() =>
                setIsDropdownLanguage((drop) => (drop = !drop))
              }
              onMouseLeave={() =>
                setIsDropdownLanguage((drop) => (drop = !drop))
              }
            >
              <img src={flagimg} />
              EN <i className="fa-solid fa-caret-down"></i>
              {IsDropdownLanguage && (
                <div className={Hstyles.dropdownLanguage}>
                  <div className={Hstyles.TopLanguageForm}>
                    <span>Change language</span>
                    <a className="samecolor" href="">
                      Learn more
                    </a>
                  </div>
                  <form className={Hstyles.languageForm} action="">
                    <label htmlFor="">
                      <input type="radio" name="Language" checked />
                      English - EN
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      español - ES
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      Persian - فارسی
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      עברית - HE
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      한국어 - KO
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      português - PT
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      中文 (简体) - ZH
                    </label>
                    <label htmlFor="">
                      <input type="radio" name="Language" />
                      Deutsch - DE
                    </label>
                  </form>
                  <hr />
                  <div className={Hstyles.BottomLanguageForm}>
                    <span>
                      <img src={flagimg} />
                      <p>you are shopping on Amazon.com</p>
                    </span>
                    <a className="samecolor" href="">
                      Change country/region.
                    </a>
                  </div>
                </div>
              )}
            </div>
            {isAdmin ? (
              <div className={Hstyles.homeProfile}>
                <Link to="/Admin" className={Hstyles.profile}>
                  <i className="fa-solid fa-user"></i>
                </Link>
              </div>
            ) : (
              <div
                className={Hstyles.option}
                onMouseEnter={() =>
                  setIsDropdownLogin((prev) => (prev = !prev))
                }
                onMouseLeave={() =>
                  setIsDropdownLogin((prev) => (prev = !prev))
                }
              >
                <span className={Hstyles.optionLineOne}>Hello, sign in</span>
                <span className={Hstyles.optionLineTwo}>
                  Account & Lists <i className="fa-solid fa-caret-down"></i>
                </span>
                {isDropdownLogin && (
                  <div className={Hstyles.dropdownLogin}>
                    <Link to="/RegisterLogin" className={Hstyles.signInButton}>
                      Sign in
                    </Link>
                    <p className={Hstyles.samecolor}>
                      New customer?{" "}
                      <a className="samecolor" href="#">
                        Start here.
                      </a>
                    </p>
                  </div>
                )}
              </div>
            )}

            <div className={Hstyles.option}>
              <span className={Hstyles.optionLineOne}>Returns</span>
              <span className={Hstyles.optionLineTwo}>& Ordere</span>
            </div>

            <Link to="/buy" className={Hstyles.Basket}>
              <span className={Hstyles.optionLineTwo}>{totalQuantity}</span>
              <img src={basketimg} />
            </Link>
          </nav>
        </div>
        <div
          style={
            isfocus || isDropdownLogin || IsDropdownLanguage
              ? { position: "sticky" }
              : {}
          }
          className={Hstyles.bottomHead}
        >
          <div>
            <OffcanvasMenu />
          </div>
          <span className={Hstyles.spandecory}>Today's Deals</span>
          <span className={Hstyles.spandecory}>Customer Service</span>
          <span className={Hstyles.spandecory}>Registry</span>
          <span className={Hstyles.spandecory}>Gift Cards</span>
          <span className={Hstyles.spandecory}>Sell</span>
        </div>
      </header>
    </div>
  );
};

export default Header;
