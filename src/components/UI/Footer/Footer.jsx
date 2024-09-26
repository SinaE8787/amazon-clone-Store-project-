import flaggicon from "../../../assets/images/flag-iran.png";
import amazonIcon from "../../../assets/images/Logo.png";
import Fstyles from "./Footer.module.css";
import lists from "./footerData";
const Footer = () => (
  <div className={Fstyles.allFather}>
    <div className={Fstyles.footerLinks}>
      {lists?.map((list, index) => (
        <div className={Fstyles.links} key={index}>
          {list?.map((data) => (
            <a href="#" key={data?.id}>
              {data?.text}
            </a>
          ))}
        </div>
      ))}
    </div>
    <div className={Fstyles.footerData}>
      <a href="/">
        <img src={amazonIcon} />
      </a>
      <span>
        <i className="fa-solid fa-globe"></i>English
      </span>
      <span>
        <i className="fa-solid fa-dollar-sign"></i>USA - U.s Dollor
      </span>
      <span>
        <img src={flaggicon} /> Iran
      </span>
    </div>
  </div>
);

export default Footer;
