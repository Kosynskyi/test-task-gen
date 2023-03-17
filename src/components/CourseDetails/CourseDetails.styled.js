import styled from 'styled-components';
import { breakpoints } from 'services/mixins';
import { FaLock, FaLockOpen } from 'react-icons/fa';

export const Wrapper = styled.div`
  @media ${breakpoints.mobile} {
    display: flex;
    flex-direction: column;
    margin-bottom: ${props => props.theme.space[4]}px;
  }

  @media ${breakpoints.desktop} {
    flex-direction: row;
    margin-bottom: ${props => props.theme.space[6]}px;
  }
`;

export const ImageWrapper = styled.div`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[4]}px;
    width: 100%;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[1]}px;
    margin-right: ${props => props.theme.space[5]}px;
    width: 50%;
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
    text-align: left;
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

export const CourseDuration = styled.p`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
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

export const NotAvailableLessons = styled.span`
  @media ${breakpoints.mobile} {
    color: ${props => props.theme.colors.secondary};
    font-weight: ${props => props.theme.fontWeights.normal};
  }
`;

export const Subtitle = styled.h3`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.xxl};
    line-height: ${props => props.theme.lineHeights.primary};
    letter-spacing: ${props => props.theme.letterSpacing.primary};
    text-align: center;
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xxxl};
  }
`;

export const LessonTitle = styled.p`
  @media ${breakpoints.mobile} {
    margin-bottom: ${props => props.theme.space[2]}px;
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.secondary};
    letter-spacing: ${props => props.theme.letterSpacing.secondary};
    text-align: center;
  }

  @media ${breakpoints.desktop} {
    margin-bottom: ${props => props.theme.space[3]}px;
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const StatusText = styled.p`
  @media ${breakpoints.mobile} {
    font-weight: ${props => props.theme.fontWeights.medium};
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.secondary};
    letter-spacing: ${props => props.theme.letterSpacing.secondary};
    text-align: center;
  }

  @media ${breakpoints.desktop} {
    font-size: ${props => props.theme.fontSizes.xl};
  }
`;

export const ButtonArrow = styled.button`
  @media ${breakpoints.mobile} {
    padding: ${props => props.theme.space[4]}px;
    border: ${props => props.theme.borders.none};
    background-color: transparent;
    cursor: pointer;
    transition: 500ms;
  }

  @media ${breakpoints.desktop} {
    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const IconLock = styled(FaLock, FaLockOpen)`
  position: relative;
  top: 3px;
`;

export const IconUnlock = styled(FaLockOpen)`
  position: relative;
  top: 3px;
`;

export const VideoWrapper = styled.div`
  width: 1100px;
`;
