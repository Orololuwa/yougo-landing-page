import styled from "styled-components";
import { blue } from "theme";

const StyledStories = styled.section`
  background-color: ${blue[200]};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  padding: 5rem 15rem;
  position: relative;

  .quote {
    position: absolute;
    top: 3rem;
    left: 9rem;
    z-index: 50;
  }
  .stories-left {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1rem;
    .stories-headers {
      &--header {
        z-index: 500;
      }
    }
  }

  .stories-right {
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }
`;

export default StyledStories;
