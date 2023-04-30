import styled from 'styled-components';
import theme from '../../../styles/theme';

export const TrHead = styled.tr`
  background-color: ${theme.yellow};
  text-align: center;

  & > td:nth-child(5) {
    border-right: 0;
  }

  & > td:nth-child(6) {
    width: 200px;
    padding: 0 !important;
    border: 0;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  }

  & > td:last-child {
    width: 175px;
    border-left: 0;
  }
`;
