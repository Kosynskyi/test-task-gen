import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledBackHome = styled(Link)`
  & > svg {
    position: relative;
    top: 4px;
    width: 52px;
    height: 52px;
    transition: 500ms;
  }
  &:hover > svg {
    transform: scale(1.05);
  }
`;

export const TextInfo = styled.p`
  font-size: ${props => props.theme.fontSizes.xxl};
`;
