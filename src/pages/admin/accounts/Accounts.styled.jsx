import styled from "styled-components";
import theme from "../../../styles/theme";

export const BigP = styled.p`
  font-size: 14pt;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
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

export const CreateButton = styled.button`
  background-color: ${theme.red};
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  border-radius: 5px;
  color: white;
  width: 50%;
`;