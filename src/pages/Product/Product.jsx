import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Pstyles from "./Product.module.css";
import ProductsProvider from "../../context/ProductsProvider";
import Shopcart from "../../components/Product/Shopcart";
import Deliverimg from "../../assets/images/amazonDeliver.png";

const Product = () => {
  const [seemoreDetails, setseemoreDetails] = useState(false);
  const [seemoreAbout, setseemoreAbout] = useState(false);
  const [isfocus, setisfocus] = useState(false);
  const { setsignelProduct, findProduct } = useContext(ProductsProvider);
  const ProductName = useParams().name;
  useEffect(() => {
    setsignelProduct(ProductName);
  }, []);
  return (
    <>
      <div className={Pstyles.ProductPage}>
        <div className={Pstyles.TopPageImg}>
          <img src={Deliverimg} />
        </div>
        <div className={Pstyles.ProductPageData}>
          <div className={Pstyles.imgProduct}>
            <div className={Pstyles.stickyBox}>
              <img src={findProduct?.imgUrl} />
            </div>
          </div>
          <div className={Pstyles.productInfo}>
            <div className={Pstyles.NameAndRate}>
              <h1>{findProduct?.name}</h1>
              <p>{findProduct?.description}</p>
              <a href="" className="samecolor">
                Visit the acer Store
              </a>
              <div className={Pstyles.Rate}>
                <div className={Pstyles.star}>
                  <i
                    className="fa-solid fa-star-half-stroke fa-lg"
                    style={{ color: "#FFD43B" }}
                  ></i>
                </div>
                <div className={Pstyles.rateLinks}>
                  <a className="samecolor" href="">
                    {findProduct?.star ? findProduct?.star : ""} ratings
                  </a>
                  <span>|</span>
                  <a className="samecolor" href="">
                    Search this page
                  </a>
                </div>
              </div>
              <span className={Pstyles.sells}>6K+ bought in past month</span>
            </div>
            {findProduct?.nonExistenT ? (
              <>
                <h1 className={Pstyles.nonExisten}>
                  We do not have this item in stock
                </h1>
              </>
            ) : (
              <>
                <div className={Pstyles.PriceAndOffer}>
                  <div className={Pstyles.Price}>
                    {findProduct?.offer && <h2>-{findProduct?.offer}</h2>}
                    <h1>
                      <span>
                        <i className="fa-solid fa-dollar-sign"></i>
                      </span>
                      {findProduct?.price}
                      <span>99</span>
                    </h1>
                  </div>
                  <div className={Pstyles.lastPrice}>
                    Last Pricr :
                    <span>
                      <i className="fa-solid fa-dollar-sign"></i>
                      {findProduct?.lastPrice}
                    </span>
                  </div>
                  <div className={Pstyles.Paragraphs}>
                    <div className={Pstyles.paragrph1}>
                      <i className="fa-solid fa-dollar-sign"></i>91.31 Shipping
                      & Import Fees Deposit to Germany
                      <div onClick={() => setisfocus((prev) => (prev = !prev))}>
                        <span
                          className="samecolor"
                          style={{ paddingLeft: "3px" }}
                        >
                          Details
                        </span>{" "}
                        <i
                          className="fa-solid fa-chevron-down"
                          style={{ color: "#b2b2b3" }}
                        ></i>
                        {isfocus ? (
                          <>
                            <div className={Pstyles.arrow}></div>
                            <div className={Pstyles.taxDropdown}>
                              <div className={Pstyles.closebtn}>
                                <div className={Pstyles.titledropdown}>
                                  Shipping & Fee Details
                                </div>
                                <i
                                  class="fa-solid fa-x fa-lg"
                                  onClick={() => setisfocus(true)}
                                ></i>
                              </div>
                              <div className={Pstyles.priceAndDeliver}>
                                <div>
                                  <span>offer</span>
                                  <span>
                                    30.56{" "}
                                    <i className="fa-solid fa-dollar-sign"></i>
                                  </span>
                                </div>
                                <div>
                                  <span>deliver Price</span>
                                  <span>
                                    60.00{" "}
                                    <i className="fa-solid fa-dollar-sign"></i>
                                  </span>
                                </div>
                              </div>
                              <div className={Pstyles.total}>
                                <span>
                                  totale : 100{" "}
                                  <i className="fa-solid fa-dollar-sign"></i>
                                </span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                    </div>
                    <div>
                      Available at a lower price from
                      <span className="samecolor"> other sellers </span>that may
                      not offer free Prime shipping.
                    </div>
                    <div className={Pstyles.paragrph2}>
                      <div className={Pstyles.orengeBox}>Extra Savings</div>
                      <span>
                        Amazon Music offer with this purchase 1 Applicable
                        Promotion
                      </span>
                      {<div className={Pstyles.hoverDropdown}></div>}
                    </div>
                  </div>
                </div>
              </>
            )}

            <div
              className={`${Pstyles.ProductDetails} ${
                seemoreDetails ? Pstyles.SeeMoreDetails : ""
              }`}
            >
              <h3>More Details : </h3>
              <ul>
                <li>
                  <span>Brand</span>
                  <span>{findProduct?.Details?.brand}</span>
                </li>
                <li>
                  <span>Model</span>
                  <span>{findProduct?.Details?.model}</span>
                </li>
                <li>
                  <span>Size</span>
                  <span>{findProduct?.Details?.size}</span>
                </li>
                <li>
                  <span>Color</span>
                  <span>{findProduct?.Details?.color}</span>
                </li>
                {findProduct?.Details?.digitalDetail && (
                  <>
                    <li>
                      <span>Hard disk Size</span>
                      <span>{findProduct?.Details?.hard}</span>
                    </li>
                    <li>
                      <span>CPU</span>
                      <span>{findProduct?.Details?.cpu}</span>
                    </li>
                    <li>
                      <span>RAM Memory</span>
                      <span>{findProduct?.Details?.ram}</span>
                    </li>
                    <li>
                      <span>Graphics Card</span>
                      <span>{findProduct?.Details?.graphic}</span>
                    </li>
                  </>
                )}
              </ul>
              <div
                className="samecolor"
                onClick={() =>
                  setseemoreDetails((detail) => (detail = !detail))
                }
              >
                {findProduct?.Details?.digitalDetail && (
                  <>
                    {seemoreDetails ? (
                      <>
                        <span>Show Less</span>
                        <i
                          className="fa-solid fa-chevron-up fa-lg"
                          style={{ color: "#858585", paddingLeft: ".4rem" }}
                        ></i>
                      </>
                    ) : (
                      <>
                        <span>See More</span>
                        <i
                          className="fa-solid fa-chevron-down fa-lg"
                          style={{ color: "#999999", paddingLeft: ".4rem" }}
                        ></i>
                      </>
                    )}
                  </>
                )}
              </div>
            </div>
            <div
              className={`${Pstyles.AboutItem} ${
                seemoreAbout ? Pstyles.SeeMoreAbout : ""
              }`}
            >
              <h3>About this item</h3>
              <ul>
                <li>
                  Purposeful Design: Travel with ease and look great doing it
                  with the Aspire's 3 thin, light design.
                </li>
                <li>
                  Ready-to-Go Performance: The Aspire 3 is ready-to-go with the
                  latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal
                  for the entire family, with performance and productivity at
                  the core.
                </li>
                <li>
                  Visibly Stunning: Experience sharp details and crisp colors on
                  the 15.6" Full HD IPS display with 16:9 aspect ratio and
                  narrow bezels.
                </li>
                <li>
                  Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
                  solid-state drive storage to store your files and media
                </li>
                <li>
                  The HD front-facing camera uses Acer’s TNR (Temporal Noise
                  Reduction) technology for high-quality imagery in low-light
                  conditions. Acer PurifiedVoice technology with AI Noise
                  Reduction filters out any extra sound for clear communication
                  over online meetings.
                </li>
                <li>
                  filters out any extra sound for clear communication over
                  online meetings. Wireless Wi-Fi 6 Convenience: Maintain a
                  strong, consistent wireless signal with Wi-Fi 6 (aka 802.11ax)
                  and 2x2 MU-MIMO technology.
                </li>
                <li>
                  Improved Thermals: With a 78% increase in fan surface area,
                  enjoy an improved thermal system and an additional 17% thermal
                  capacity. Allowing for longer, more efficient work sessions
                  while not plugged in.
                </li>
                <li>
                  Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2
                  Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB
                  Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP
                  support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for AC
                  adapter
                </li>
                <li>
                  What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord
                </li>
                <li>Keyboard backlight not present on this model</li>
              </ul>
              <div
                className="samecolor"
                onClick={() => setseemoreAbout((about) => (about = !about))}
              >
                {seemoreAbout ? (
                  <>
                    <span>Show Less</span>
                    <i
                      className="fa-solid fa-chevron-up fa-lg"
                      style={{ color: "#858585", paddingLeft: ".4rem" }}
                    ></i>
                  </>
                ) : (
                  <>
                    <span>See More</span>
                    <i
                      className="fa-solid fa-chevron-down fa-lg"
                      style={{ color: "#999999", paddingLeft: ".4rem" }}
                    ></i>
                  </>
                )}
              </div>
              <div className={Pstyles.Note}>
                <i
                  className="fa-solid fa-message fa-flip-horizontal fa-xl"
                  style={{ color: "#878787" }}
                ></i>
                <a href="/" className="samecolor">
                  Report an issue with this product or seller
                </a>
              </div>
              <p>
                <strong>Note: </strong>Products with electrical plugs are
                designed for use in the US. Outlets and voltage differ
                internationally and this product may require an adapter or
                converter for use in your destination. Please check
                compatibility before purchasing.
              </p>
            </div>
          </div>
          <div className={Pstyles.shoppingBox}>
            {findProduct?.nonExistenT ? <></> : <Shopcart {...findProduct} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
