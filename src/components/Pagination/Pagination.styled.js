import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { GrNext, GrPrevious } from 'react-icons/gr';

export const PaginateList = styled(ReactPaginate)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  list-style: none;

  & > li {
    cursor: pointer;

    &:not(:last-child) {
      margin-right: ${props => props.theme.space[5]}px;
    }

    & > a {
      font-size: ${props => props.theme.fontSizes.xl};
      font-weight: ${props => props.theme.fontWeights.bold};
      line-height: ${props => props.theme.lineHeights.primary};
      letter-spacing: ${props => props.theme.letterSpacing.primary};
      color: ${props => props.theme.colors.primary};
    }

    & > [aria-current] {
      font-size: ${props => props.theme.fontSizes.xxl};
      color: ${props => props.theme.colors.active};
    }
  }
`;

export const ButtonNext = styled(GrNext)`
  position: relative;
  top: 3px;
  width: 24px;
  cursor: pointer;
`;

export const ButtonPrev = styled(GrPrevious)`
  position: relative;
  top: 3px;
  width: 24px;
  cursor: pointer;
`;
