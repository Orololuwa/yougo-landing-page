import styled from "styled-components";
import { white, grey } from "theme";

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  background-color: ${white[100]};
  color: ${grey[100]};
  position: relative;
  overflow: hidden;
  background: url(Background.svg) no-repeat;
  background-size: cover;

  .header {
    padding: 10rem;
    display: flex;
    height: 100%;

    &-texts {
      width: 60%;

      .stores {
        img {
          width: 7.5rem;
          height: 2.5rem;
          cursor: pointer;
          transition: all 0.5s;
          margin-right: 0.5rem;

          &:hover {
            transform: scale(1.05);
          }
        }

        @media only screen and (min-width: 750px) {
          position: absolute;
          top: 1.5rem;
          right: 10rem;
          z-index: 250;
        }
      }
    }

    &-image {
      padding-top: 5rem;

      img {
        width: 18rem;
        object-fit: contain;
        position: absolute;
        top: 7.5rem;
        right: 10rem;
        //z-index: 250;
        display: block;
        //transform: rotate(-35deg) translateY(5rem);

        @media only screen and (max-width: 750px) {
          position: unset;
          transform: rotate(0) translateY(0);
        }
      }
    }

    @media only screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;
      padding: 5rem;

      &-texts {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default StyledHeader;
