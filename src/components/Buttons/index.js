import StyledButton from "./style";

const Button = (props) => {
    return (
        <StyledButton props={{...props}}>
            {props.children}
        </StyledButton>
    )
}

export default Button;