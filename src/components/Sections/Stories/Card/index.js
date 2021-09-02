import StyledCard from "./style";
import Quote from "assets/quote.svg";

const Card = (props) => {
  return (
    <StyledCard props={{ ...props }}>
      <img src={Quote} alt="quote" className="quote" />
      <img src={props.logo} alt="icon" className="icon" />
      <p className="body">{props.body}</p>
      <div className="customer">
        <p className="customer-name">{props.customerName}</p>
        <p className="customer-title">{props.customerTitle}</p>
      </div>
    </StyledCard>
  );
};

export default Card;
