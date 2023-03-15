import styled from 'styled-components';
import Marker from '../../assets/marker.png';
import { breakpoints } from 'services/mixins';

export const StyledCourseList = styled.ul`
  @media ${breakpoints.mobile} {
    display: grid;
    flex-direction: column;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    grid-row-gap: ${props => props.theme.space[9]}px;
    width: 312px;
  }
  @media ${breakpoints.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: ${props => props.theme.space[8]}px;
    grid-row-gap: ${props => props.theme.space[8]}px;
    width: 1020px;
  }
`;

export const StyledCourseItem = styled.li`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    padding: ${props => props.theme.space[5]}px;
    padding-top: ${props => props.theme.space[6]}px;
    padding-bottom: ${props => props.theme.space[6]}px;
    border-radius: ${props => props.theme.radii.secondary};
    box-shadow: ${props => props.theme.boxShadow.primary};
    overflow: hidden;
    width: 312px;
    cursor: pointer;
    transition: 500ms;
  }
  @media ${breakpoints.desktop} {
    width: 520px;
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const CourseTitle = styled.h2`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    text-align: center;
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xxl};
  }
`;

export const Description = styled.p`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[3]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const Image = styled.img`
  margin-bottom: ${props => props.theme.space[3]}px;
`;

export const Subtext = styled.p`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.secondary};
    letter-spacing: ${props => props.theme.letterSpacing.secondary};
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[3]}px;
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const Quantity = styled.span`
  @media ${breakpoints.mobile} {
    color: ${props => props.theme.colors.quantity};
    font-weight: ${props => props.theme.fontWeights.bold};
  }
`;

export const Subtitle = styled.h3`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    text-align: center;
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const SkillList = styled.ul`
  @media ${breakpoints.mobile} {
  }

  @media ${breakpoints.desktop} {
  }
`;

export const SkillItem = styled.li`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${props => props.theme.space[2]}px;

    ::before {
      content: '';
      position: relative;
      top: 3px;
      margin-right: ${props => props.theme.space[2]}px;

      width: 26px;
      height: 26px;
      background-size: contain;
      background-image: url(${Marker});
      color: red;
      background-repeat: no-repeat;
    }
  }
`;

export const SkillItemText = styled.p`
  @media ${breakpoints.mobile} {
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.normal};
    font-size: ${props => props.theme.fontSizes.m};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;
