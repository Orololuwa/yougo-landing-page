import StyledMobile from "./style";
import { Link } from "react-scroll";

const Mobile = (props) => {
  const navStyles = !props.mobileNav
    ? {
        translate: "-120%",
        visibility: "visible"
      }
    : {
        translate: "-20%",
        visibility: "hidden"
      };

  return (
    <StyledMobile props={{ ...props.mobileNav }} navStyles={navStyles}>
      <nav className="mobile-nav">
        <span>
          <Link
            activeClass="active"
            className="underline"
            onClick={props.onCloseMobileNavHandler}
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            className="underline"
            onClick={props.onCloseMobileNavHandler}
            to="features"
            spy={true}
            smooth={true}
            duration={500}
          >
            Features
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            className="underline"
            onClick={props.onCloseMobileNavHandler}
            to="gallery"
            spy={true}
            smooth={true}
            duration={500}
          >
            Gallery
          </Link>
        </span>
        <span>
          <Link
            activeClass="active"
            className="underline"
            onClick={props.onCloseMobileNavHandler}
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacts
          </Link>
        </span>
      </nav>
    </StyledMobile>
  );
};

export default Mobile;
