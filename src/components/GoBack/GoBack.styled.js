import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { breakpoints } from 'services/mixins';

export const GoBackLink = styled(Link)`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  text-decoration: none;
`;

export const GoBackText = styled.span`
  margin-left: ${props => props.theme.space[3]}px;
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.secondary};
  color: ${props => props.theme.colors.black};
`;

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[9]}px;
  }
`;
export const ArrowBack = styled(BiArrowBack)`
  position: relative;
  top: -1px;
`;
