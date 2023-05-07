import styled from 'styled-components';
import theme from '../../styles/theme';

export const ButtonContainer = styled.div`
  align-self: end;
  display: flex;
  gap: 1em;
`;

export const Button = styled.button`
  width: 150px;
  padding: 0.5em 1em;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 3px 3px;
  cursor: pointer;

  color: white;
  background-color: ${(props) => (props.yellow ? theme.yellow : theme.red)};

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }

  &:disabled {
    background-color: ${theme.gray};
    pointer-events: none;
    cursor: default;
  }
`;
export const AcceptBut = styled(Button)`
  background-color: green;
`;
