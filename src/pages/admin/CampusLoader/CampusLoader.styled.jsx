import theme from "../../../styles/theme";
import styled from "styled-components";

export const CampusHolder = styled.div`
  background-color: #EFEFEF;
  height: 95%;
  width: 95%;
  border-radius: 10px;
  border: 1px solid black;
  padding: 1.5rem;
  font-size: 13pt;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div.separator {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
  }
`;

export const CampusListContainer = styled.div`
  max-height: 75vh;
  width: 100%;
  overflow-y: auto;
`;

export const TextButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem;
  font-size: 12pt;
  &:hover { color: ${theme.red} }
`;

export const CreateButton = styled.button`
  background-color: ${theme.red};
  border-radius: 5px;
  // box-shadow: 0px 2px 2px 0px gray;
  color: white;

  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  width: 5rem;

  &:active {
    background-color: white;
    color: ${theme.red};
  }
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  width: calc(95% - 5rem);
  padding: 0.3rem;
  font-size: 10pt;
`;

export const CLHeader = styled.h3`
  width: 100%;
  border-bottom: 1px solid black;
`;

export const LowerInputContainer = styled.div`
  border-top: 1px solid black;
  padding-top: 1rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;