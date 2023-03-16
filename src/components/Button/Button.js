import { StyledButton } from './Button.styled';

const Button = ({ children }) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;
