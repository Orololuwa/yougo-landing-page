import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem;
  background-color: ${({ props }) => props.bgColor};
  color: ${({ props }) => props.color};
  box-shadow: 2px 2px 4px #33333367;
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  border-radius: 2.5px;

  &:after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    transition: 0.5s;
    color: ${({ props }) => props.color};
  }

  &:hover {
    padding-right: 24px;
    padding-left: 8px;
  }

  &:hover:after {
    opacity: 1;
    right: 10px;
  }

  @media only screen and (max-width: 750px) {
    margin: 2.5rem 0;
  }
`;

export default StyledButton;
