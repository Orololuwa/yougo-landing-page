import styled from "styled-components";
import { blue, white } from "theme";

const StyledHeader = styled.header`
  height: 80vh;
  width: 100%;
  background-color: ${blue[100]};
  color: ${white[100]};
  position: relative;
  overflow: hidden;

  .header {
    padding: 5rem;
    display: flex;

    &-texts {
      width: 40%;

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
      }
    }

    &-image {
      padding-top: 5rem;

      img {
        width: 30rem;
        object-fit: cover;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 250;
        display: block;
        transform: rotate(-35deg) translateY(5rem);

        @media only screen and (max-width: 750px) {
          position: unset;
          transform: rotate(0) translateY(0);
        }
      }
    }

    @media only screen and (max-width: 750px) {
      flex-direction: column;
      align-items: center;

      &-texts {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default StyledHeader;
