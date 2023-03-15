import styled from 'styled-components';
import { breakpoints } from 'services/mixins';

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.space[4]}px;
    padding-top: 92px;
    padding-bottom: 92px;
    min-width: 360px;
  }
`;

export const MainTitle = styled.h1`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[6]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const Subtitle = styled.h2`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[6]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};

    text-align: center;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[7]}px;
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;
