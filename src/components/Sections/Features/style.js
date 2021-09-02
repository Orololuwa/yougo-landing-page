import styled from "styled-components";
import { black, typeScale } from "theme";

const StyledFeatures = styled.section`
  color: ${black[300]};
  padding-bottom: 0;

  .features {
    &-headers {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      &--header {
        background-image: linear-gradient(
          to right,
          ${black[200]},
          ${black[100]}
        );
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        letter-spacing: 0.2rem;
        font-size: ${typeScale.header2};
        font-weight: 600;
        text-transform: Capitalize;
      }

      &--subheader {
        width: 35rem;
        font-size: ${typeScale.bodyText3};
        font-weight: 400;
      }
    }

    &-content {
      display: flex;
      gap: 1rem;
      &--text {
        flex-basis: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
        justify-items: center;
        padding: 2.5rem 0;
      }
      &--image {
        flex-basis: 50%;
      }
      .composition {
        position: relative;
        margin-top: 5rem;

        &__photo {
          width: 45%;
          height: 10rem;
          object-fit: cover;
          box-shadow: 0 1.5rem 4rem ${black[300]}64;
          border-radius: 2px;
          position: absolute;
          z-index: 10;
          transition: all 0.2s;
          outline-offset: 1rem;

          @media only screen and (max-width: 750px) {
            float: left;
            width: 33.333333%;
            position: relative;
            box-shadow: 0 1rem 2rem ${black[300]}64;
          }

          &--p1 {
            left: 0;
            top: -1rem;

            @media only screen and (max-width: 750px) {
              top: 0;
              transform: scale(1.2);
            }
          }

          &--p2 {
            right: 20%;
            top: 1rem;

            @media only screen and (max-width: 750px) {
              right: 0;
              top: -2rem;
              transform: scale(1.3);
              z-index: 100;
            }
          }

          &--p3 {
            left: 20%;
            top: 7.5rem;

            @media only screen and (max-width: 750px) {
              left: 0;
              top: 1rem;
              transform: scale(1.1);
            }
          }

          &:hover {
            outline: 1rem solid ${black[100]};
            transform: scale(1.05) translateY(-0.5rem);
            box-shadow: 0 2.5rem 4rem ${black[300]}88;
            z-index: 200;
          }
        }

        &:hover &__photo:not(:hover) {
          transform: scale(0.95);
        }
      }

      @media only screen and (max-width: 750px) {
        flex-direction: column;
        &--text,
        &--image {
          flex-basis: 100%;
        }
      }
    }
  }

  @media only screen and (max-width: 750px) {
    padding-bottom: 5rem;
  }
`;

export default StyledFeatures;
