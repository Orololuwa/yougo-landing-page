import StyledHeader from "./style";
import Phone from "../../assets/Phone1.png";
import Button from "components/Buttons";
import { purple, white } from "theme";

const Header = (props) => {
  return (
    <StyledHeader {...props} id="home">
      {props.children}
      <div className="header">
        <div className="header-texts">
          <h2>
            Logistics made easy. <br />
            Get going now.
          </h2>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p> */}
          <Button className="button" bgColor={purple[100]} color={white[100]}>
            Get Started
          </Button>
          <div className="stores">
            <img src="/playstore.png" alt="playstore" />
            <img src="/appstore.png" alt="appstore" />
          </div>
        </div>
        <div className="header-image">
          <img src={Phone} alt="Yougo's screenshot" />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
