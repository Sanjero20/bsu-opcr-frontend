import styled from 'styled-components';
import { Container as Con } from '../../../../components/ui/Container.styled';
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
  gap: 50px;
  align-items: center;
`;

export const Depts = styled.button`
  height: 250px;
  width: 300px;
  border-radius: 50px;
  background-color: white;
  display: flex;

  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  &:active {
    transform: translateY(3px);
    box-shadow: none;
  }
`;

export const Divider = styled.div`
  flex-wrap: wrap;
  display: flex;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  gap: 70px;
`;
