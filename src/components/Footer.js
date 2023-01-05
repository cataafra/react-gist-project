import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import logo from "../images/afra_logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <img className="footer__logo" src={logo} alt="afra_logo" />
      <div className="footer__text">
        Made with <FontAwesomeIcon icon={faHeart} /> by
        <a href="https://github.com/cataafra"> @cataafra</a>
      </div>
    </section>
  );
};

export default Footer;
