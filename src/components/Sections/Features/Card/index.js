import StyledCard from "./style";
import { IoFastFood } from "react-icons/io5";
import { blue } from "theme";

const Card = (props) => {
  return (
    <StyledCard>
      <IoFastFood color={blue[100]} />
      <p className="header-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p className="header-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </StyledCard>
  );
};

export default Card;
