import styled from "styled-components";
import { black } from "theme";

const StyledCard = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;

  .header-1 {
    color: ${black[200]};
    margin: 0.5rem 0;
  }

  .header-2 {
    width: 100%;
    margin: 0;
  }

  @media only screen and (max-width: 398px) {
    width: 25rem;
  }
`;

export default StyledCard;
