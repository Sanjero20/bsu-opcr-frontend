import styled from 'styled-components';
import { Button } from '../../../components/ui/Button.styled';
import { Container as Con } from '../../../components/ui/Container.styled';

export const Input = styled.input`
  color: black;
  height: 40px;
  min-width: 400px;
  padding: 10px;
  background-color: #d9d9d9;
  border: 1px solid;
  border-radius: 4px;
`;

export const Container = styled(Con)`
  gap: 60px;

  align-items: center;
`;

export const Depts = styled.button`
  font-weight: bold;
  height: 250px;
  max-width: 400px;
  border-radius: 25px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 28px;
  letter-spacing: 0.3rem;
  background-color: #853030;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:active {
    transform: scale(95%);
    box-shadow: none;
  }
  &:hover {
    background-color: white;
    color: black;
    font-size: 32px;
  }
`;

export const Divider = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5em;
  padding-bottom: 2em;
`;

export const SubButton = styled(Button)`
  background-color: ${(props) => (props.green ? 'green' : '#AEAEAE')};
`;
