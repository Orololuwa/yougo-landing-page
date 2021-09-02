import styled from "styled-components";
import { white } from "theme";

const StyledCard = styled.div`
  width: ${({ props }) => props.width || "20rem"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  text-align: left;
  background-color: ${white[100]};
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgba(41, 41, 42, 0.07);
  position: relative;

  .quote {
    position: absolute;
    top: 5rem;
    left: 1rem;
    width: 15px;
  }

  .icon {
    height: 2rem;
    margin: 1rem;
    margin-bottom: 0;
  }

  .body {
    padding-left: 2rem;
  }

  .customer {
    padding-left: 2rem;
    &-name {
      font-weight: 600;
      margin: 0;
    }
    &-title {
      margin: 0;
      color: ${white[400]};
    }
  }

  @media only screen and (max-width: 600px) {
    width: 20rem;
  }
`;

export default StyledCard;
