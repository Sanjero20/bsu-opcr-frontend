import styled from 'styled-components';
import theme from '../../../styles/theme';

import { Button as Btn } from '../../../components/ui/Button.styled';

export const EditField = styled.div`
  overflow-y: overlay;
  height: 100%;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  padding-bottom: 0.5em;
  gap: 0.25em;
`;

const Grid = styled.div`
  padding: 0.5em;
  display: grid;
  grid-template-columns: repeat(2, 1fr) 150px repeat(2, 1fr) 40px;
  gap: 0.5em;
`;

export const Header = styled(Grid)`
  align-items: center;
  background-color: ${theme.yellow};
  text-align: center;
  border-bottom: 1px solid black;
  position: sticky;
  top: 0;
`;

export const Row = styled.div`
  background-color: ${theme.gray};
  display: flex;
  flex-direction: column;
  margin: 0 0.25em;
  border-radius: 5px;
`;

export const RowContent = styled(Grid)`
  border-radius: 5px;
  min-height: 75px;
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
  gap: 0.5em;

  overflow-y: auto;
`;

export const Button = styled(Btn)`
  align-self: center;
  font-weight: bold;
  background-color: #4bbd2e;
  width: auto;
`;

export const BtnAddIndicator = styled(Button)`
  background-color: #4bbd2e;
  margin-bottom: 1em;
  width: auto;
`;

export const BtnCircle = styled(Button)`
  border-radius: 5px;
  background-color: ${theme.red};
  color: white;

  width: 2.5em;
  height: 2.5em;

  justify-self: center;
  align-self: center;

  font-weight: bold;
`;
