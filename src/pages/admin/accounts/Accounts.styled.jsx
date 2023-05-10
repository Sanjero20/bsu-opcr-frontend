import styled from "styled-components";
import theme from "../../../styles/theme";

export const BigP = styled.p`
  font-size: 14pt;
`;

export const SmallP = styled.p`
  font-size: 12pt;
`;

export const SmallPu = styled(SmallP)`
  color: #999999;
`;

export const Input = styled.input`
  padding: 0.5rem;
  width: 100%;
  font-size: 10pt;
  border: 1px solid black;
  border-radius: 5px;
  box-shadow: 0px 3px 1px 1px #b2b2b2;
  margin-bottom: 0.8rem;
`;

export const DropDown = styled.select`
  display: block;
  margin: 0 auto;
  padding: 0.1rem;
  border-radius: 5px;
  width: 80%;
`;

export const CreateButton = styled.button`
  background-color: ${theme.red};
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border: 1px solid ${theme.red};
  border-radius: 5px;
  color: white;
  width: 50%;

  &:active {
    background-color: white;
    border: 1px solid black;
    color: ${theme.red};
  }
`;

export const WrapperGrid3 = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  text-align: center;
  margin-top: 0.5rem;
  width: 100%;
`;

export const WrapperGrid2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  width: 100%;
`;

export const TableScrollableWrapper = styled.div`
  height: 25vh;
  width: 100;
  overflow-y: auto;
`;