import styled from 'styled-components';
import { breakpoints } from 'services/mixins';

export const ErrorMessage = styled.p`
  @media ${breakpoints.mobile} {
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.normal};
    color: ${props => props.theme.colors.primary};
    text-align: center;
  }
  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;
