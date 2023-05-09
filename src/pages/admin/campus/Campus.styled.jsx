import styled from "styled-components";
import theme from "../../../styles/theme";

//////////////////////
//  wrappers design //
//////////////////////
export const CampusWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 30% calc(70% - 0.5rem);
  gap: 0.5rem;
`;

export const SideCampusListWrapper = styled.div`
  background-color: #EFEFEF;
  border-radius: 10px;
  border: 1px solid black;
  padding: 1rem;

  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SideDepartmentListWrapper = styled(SideCampusListWrapper)`
  background-color: white;
  border: none;
`;

export const CLContainer = styled.div`
  max-height: 55vh;
  overflow-y: auto;
  padding: 0.5rem;
`;

export const DivMW = styled.div`
  width: 100%;
`;

export const DivCS = styled(DivMW)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

/////////////////////
//  input designs  //
/////////////////////
export const CLButton = styled.button`
  background-color: transparent;
  width: 100%;
  padding: 0.5rem;
  text-align: left;
`;

export const CLTmpButton = styled.button`
  background-color: transparent;
  color: gray;
  width: 100%;
  padding: 0.5rem;
  text-align: left;
`;

export const AddButton = styled.button`
  background-color: ${theme.red};
  border-radius: 10px;
  width: 5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  border: 1px solid ${theme.red};
  color: white;
`;

export const SaveButton = styled(AddButton)`
  border: 1px solid ${theme.yellow};
  background-color: ${theme.yellow};

  :disabled {
    background-color: #b69a63;
    border: 1px solid #b69a63;
  }
`;

export const Input = styled.input`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 10pt;
  padding: 0.3rem;
  width: calc(95% - 5rem);

  :disabled {
    background-color: #e0e1dc;
  }
`;

///////////////////
// text designs  //
///////////////////
export const CLHeader1 = styled.p`
  width: 100%;
  font-size: 15pt;
  font-weight: bold;
  border-bottom: 1px solid black;
`;

export const CLHeader2 = styled(CLHeader1)`
  font-size: 13pt;
  font-weight: normal;
`;

export const CPHighlight = styled.p`
  cursor: pointer;
  font-size: 12pt;
  padding: 0.5rem;
`;