import StyledCard from "./style";

const Card = (props) => {
  return (
    <StyledCard>
      <img src={props.src} alt="icon" />
      <h5 className="header-1">{props.title}</h5>
      <p className="header-2">{props.body}</p>
    </StyledCard>
  );
};

export default Card;
