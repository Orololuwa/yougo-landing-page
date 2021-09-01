import styled from "styled-components";
import { blue, typeScale, white } from "theme";

const StyledFooter = styled.footer`
  padding: 5rem;
  background-color: ${blue[100]};
  color: ${white[100]};

  .footer {
    display: flex;
    justify-content: center;

    &-contacts {
      flex-basis: 70%;

      &--element {
        display: flex;
        align-items: center;

        .icon {
          transform: scale(1.2);
        }

        span {
          padding-left: 1rem;
        }
      }
    }

    &-socials {
      &--social {
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 0.5rem;
        cursor: pointer;
        transition: all 0.8s;

        &:hover {
          transform: scale(1.4);
        }
      }
    }

    @media only screen and (max-width: 500px) {
      flex-direction: column;
      gap: 2.5rem;
    }
  }

  .copy-right {
    text-align: center;
    font-size: ${typeScale.bodyText5};
    transform: translateY(1.5rem);

    span {
      color: ${white[300]};
      padding: 0 0.5rem;
    }
  }

  @media only screen and (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default StyledFooter;
