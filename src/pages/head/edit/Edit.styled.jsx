import styled from 'styled-components';
import theme from '../../../styles/theme';

import { Button as Btn } from '../../../components/ui/Button.styled';

export const EditField = styled.div`
  height: 100%;
  border: 1px solid black;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 150px repeat(2, 1fr);
  gap: 1em;
`;

export const Header = styled(Grid)`
  align-items: center;
  background-color: ${theme.yellow};
  text-align: center;
`;

export const Row = styled(Grid)`
  margin: 0.25em;
  border-radius: 5px;
  min-height: 75px;
  padding-top: 1.25em;
  background-color: ${theme.gray};
`;

export const Card = styled.textarea`
  background-color: white;
  width: 100%;
  padding: 0.5em;
  border-radius: 5px;
  resize: none;
`;

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const Button = styled(Btn)`
  align-self: center;
  background-color: #4bbd2e;
  font-weight: bold;
`;
