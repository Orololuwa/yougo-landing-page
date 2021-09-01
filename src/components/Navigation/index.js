import { useState } from "react";
import StyledNav from "./style";
import Mobile from "./Mobile";
import { Link } from "react-scroll";

const Nav = (props) => {
  const [mobileNav, setMobileNav] = useState(false);
  let navStyles = {
    display: "none",
    translateX: "-100%",
    top: ".75rem",
    rotate: "0",
    bgColor: (color) => color
  };

  if (mobileNav) {
    navStyles = {
      display: "block",
      translateX: "0",
      top: "0",
      rotate: "135deg",
      bgColor: (color) => "transparent"
    };
  } else {
    navStyles = {
      display: "none",
      translateX: "-100%",
      top: ".75rem",
      rotate: "0",
      bgColor: (color) => color
    };
  }

  const toggleNav = () => {
    setMobileNav((prev) => !prev);
  };

  const onCloseMobileNavHandler = () => {
    setMobileNav(false);
  };

  return (
    <StyledNav props={{ navStyles }}>
      <div className="logo-wrapper">
        <img src="/icon_logo.png" alt="CloudFood's Logo" />
      </div>
      <nav className="desktop-nav">
        <span>
          <Link
            activeClass="active"
            className="underline"
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
            to="footer"
            spy={true}
            smooth={true}
            duration={500}
          >
            Contacts
          </Link>
        </span>
      </nav>
      <div className="menu" onClick={toggleNav}>
        <div className="menu-icon">&nbsp;</div>
      </div>
      <Mobile
        mobileNav={mobileNav}
        onCloseMobileNavHandler={onCloseMobileNavHandler}
      />
    </StyledNav>
  );
};

export default Nav;
