import StyledHeader from "./style";

const Header = (props) => {
  return (
    <StyledHeader {...props} id="home">
      {props.children}
      <div className="header">
        <div className="header-texts">
          <h2>Lorem Ipsum, Dolort Ipsium</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="stores">
            <img src="/playstore.png" alt="playstore" />
            <img src="/appstore.png" alt="appstore" />
          </div>
        </div>
        <div className="header-image">
          <img src="/phone1.png" alt="cloudfood screenshot" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
