import styled from "styled-components";
import { blue, white, typeScale } from "theme";

const StyledMobile = styled.div`
  width: 100%;
  height: 25rem;
  background-color: ${white[100]};
  color: ${blue[100]};
  position: absolute;
  top: 100%;
  left: 0;
  transition: all 0.5s;
  transform: translateY(${({ navStyles }) => navStyles.translate});
  visibility: ${({ navStyles }) => navStyles.display};
  z-index: -50;
  display: flex;
  aligin-items: center;
  justify-content: center;

  .mobile-nav {
    display: flex;
    flex-direction: column;
    padding-top: 2.5rem;

    span {
      font-size: ${typeScale.bodyText1};
      padding: 0.5rem 0;
      cursor: pointer;

      .underline {
        position: relative;
      }

      .underline::before {
        content: "";
        position: absolute;
        bottom: -5px;
        right: 0;
        width: 0;
        height: 2px;
        background-color: #fff;
        transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1);
      }

      @media (hover: hover) and (pointer: fine) {
        .underline:hover::before {
          left: 0;
          right: auto;
          width: 100%;
        }
      }
    }
  }
`;

export default StyledMobile;
