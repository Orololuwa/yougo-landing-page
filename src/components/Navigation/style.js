import styled from "styled-components";
import { white, grey } from "theme";

const Nav = styled.div`
  background-color: ${white[100]};
  color: ${grey[100]};
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;

  .logo-wrapper {
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 2.5rem;

    img {
      height: 1.5rem;
      object-fit: cover;
      z-index: 200;
    }
  }

  .stores {
    display: none;
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
      display: block;
    }
  }

  .desktop-nav {
    //padding: 0 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      padding: 0 1rem;
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
        background-color: ${grey[100]};
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

    @media only screen and (max-width: 750px) {
      display: none;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3rem;
    height: 2.5rem;
    border-radius: 1.5rem;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 5rem;
    cursor: pointer;
    z-index: 100;

    & .menu-icon {
      position: relative;
      z-index: 200;

      &,
      &::before,
      &::after {
        width: 100%;
        height: 2px;
        display: inline-block;
      }

      &::before,
      &::after {
        content: "";
        position: absolute;
        left: 0;
        background-color: ${grey[100]};
        transition: all 0.2s;
      }

      &::before {
        top: -${({ props }) => props.navStyles.top};
        transform: rotate(${({ props }) => props.navStyles.rotate});
      }
      &::after {
        top: ${({ props }) => props.navStyles.top};
        transform: rotate(-${({ props }) => props.navStyles.rotate});
      }

      background-color: ${({ props }) =>
        props.navStyles.bgColor(grey[100])} !important;
    }

    @media only screen and (min-width: 750px) {
      display: none;
    }
  }
`;

export default Nav;
