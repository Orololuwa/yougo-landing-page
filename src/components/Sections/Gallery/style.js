import styled from "styled-components";
import { white, blue } from "theme";

const Styled = styled.section`
  background-color: ${white[200]};
  display: flex;
  justify-content: center;
  gap: 1rem;

  .section {
    &-image {
      flex-basis: 50%;
      display: flex;
      justify-content: center;

      img {
        width: 15rem;
      }

      @media only screen and (max-width: 750px) {
        padding-top: 2.5rem;
      }
    }
    &-textContent {
      flex-basis: 50%;
      height: max-content;
      &--titles {
        h4 {
          background-image: linear-gradient(
            to right,
            ${blue[200]},
            ${blue[100]}
          );
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          letter-spacing: 0.2rem;
          font-weight: 400;
        }
        @media only screen and (max-width: 750px) {
          text-align: center;
        }
      }
      &--cards {
        display: flex;

        img {
          width: 7.5rem;
        }

        @media only screen and (max-width: 750px) {
          justify-content: center;
        }
      }

      .cc {
        @media only screen and (max-width: 419px) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    flex-direction: column-reverse;
  }
`;

export default Styled;
