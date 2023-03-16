import styled from 'styled-components';
import { breakpoints } from 'services/mixins';

export const StyledButton = styled.button`
  @media ${breakpoints.mobile} {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: ${props => props.theme.space[4]}px;
    padding-left: ${props => props.theme.space[9]}px;
    padding-right: ${props => props.theme.space[9]}px;
    font-size: ${props => props.theme.fontSizes.xl};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.primary};
    color: ${props => props.theme.colors.button};
    border: ${props => props.theme.borders.none};
    border-radius: ${props => props.theme.radii.effect};
    transition: 500ms;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 176, 200);
      color: ${props => props.theme.colors.white};
      box-shadow: 0 0 50px rgba(126, 253, 100, 0.5);
      -webkit-box-reflect: below 10px linear-gradient(transparent, #00000045);
    }
    &::before {
      content: '';
      width: 25px;
      height: 25px;
      position: absolute;
      border-right: 2px solid rgb(0, 176, 200);
      border-bottom: 2px solid rgb(0, 176, 200);
      right: 0;
      bottom: 0;
      border-radius: 0 0 25px 0;
      transition: 1000ms;
    }
    &::after {
      content: '';
      width: 25px;
      height: 25px;
      position: absolute;
      border-left: 2px solid rgb(0, 176, 200);
      border-top: 2px solid rgb(0, 176, 200);
      top: 0;
      left: 0;
      border-radius: 25px 0 0;
      transition: 1000ms;
    }
    &:hover::after,
    &:hover::before {
      width: calc(100% - 2px);
      height: calc(100% - 2px);
      border-radius: ${props => props.theme.radii.effect};
      border-color: rgb(0, 63, 72);
    }
  }
  @media ${breakpoints.desktop} {
    padding: ${props => props.theme.space[4]}px;
    padding-left: ${props => props.theme.space[7]}px;
    padding-right: ${props => props.theme.space[7]}px;
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;
