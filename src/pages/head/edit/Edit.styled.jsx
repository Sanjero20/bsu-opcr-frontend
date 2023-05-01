import styled from 'styled-components';
import theme from '../../../styles/theme';

export const EditField = styled.div`
  height: 100%;
  border: 1px solid black;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 150px repeat(2, 1fr);
  gap: 1em;
`;

export const Header = styled(Grid)`
  align-items: center;
  background-color: ${theme.yellow};
  text-align: center;
  padding: 1em;
`;
