import styled from "styled-components";
import { black } from "theme";

const StyledCard = styled.div`
  width: 15rem;
  height: 15rem;
  //box-shadow: 0px 4px 4px ${black[300]}64;
  padding: 1rem;

  .header-1 {
    color: ${black[300]}99;
  }

  @media only screen and (max-width: 398px) {
    width: 25rem;
  }
`;

export default StyledCard;
