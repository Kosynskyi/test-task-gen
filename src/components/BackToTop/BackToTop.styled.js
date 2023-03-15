import styled from 'styled-components';

export const BackToTopButton = styled.button`
  position: fixed;
  bottom: 30px;
  right: 15px;
  opacity: 1;
  transition: 1000ms;
  background-color: transparent;
  border: ${props => props.theme.borders.none};
  cursor: pointer;
`;
