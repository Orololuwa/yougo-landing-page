import StyledFooter from "./style";
import {
  IoPinOutline,
  IoMailOutline,
  IoCallOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram
} from "react-icons/io5";

const Footer = (props) => {
  return (
    <StyledFooter id="footer">
      <div className="footer">
        <div className="footer-contacts">
          <span className="footer-contacts--element">
            <IoPinOutline className="icon" />
            <span>Some Address, Some City, Some Town, Some Country</span>
          </span>
          <span className="footer-contacts--element">
            <IoMailOutline className="icon" />
            <span>somemail@mail.com</span>
          </span>
          <span className="footer-contacts--element">
            <IoCallOutline className="icon" />
            <span>08123456789</span>
          </span>
        </div>
        <div className="footer-socials">
          <IoLogoFacebook className="footer-socials--social" />
          <IoLogoTwitter className="footer-socials--social" />
          <IoLogoInstagram className="footer-socials--social" />
        </div>
      </div>
      <div className="copy-right">
        Copyright &copy; 2021. All rights reserved. Designed {"&"} Powered by
        <span>NCK Technologies</span>
      </div>
    </StyledFooter>
  );
};

export default Footer;
