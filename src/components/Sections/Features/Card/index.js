import StyledCard from "./style";

const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.src} alt="icon" />
      <h5 className="header-1">Robust Workflow</h5>
      <p className="header-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </StyledCard>
  );
};

export default Card;
