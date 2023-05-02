import styled from 'styled-components';
import theme from '../../styles/theme';


export const Separator = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: calc(20% - 0.5rem) calc(80% - 0.5rem);
    column-gap: 1rem;
`;

export const Selection = styled.div`
    background-color: ${theme.red};
    border-radius: 10px;
    padding: 2rem 0 4rem 0;

    box-shadow: 0px 1px 1px 2px gray;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
    }
`;

export const ContentHolder = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 10px;
    border: 1px solid black;
    box-shadow: 0px 2px 5px 0px gray;

    display: grid;

`;

export const ButtonStyle = styled.button`
    width: 93%;
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 0px 3px 3px 3px #670F0F;
    font-size: 14pt;

    &:active {
        transform: translateY(1.5px);
        box-shadow: 0px 1.5px 1.5px 1.5px #670F0F;
    }
`;

export const CampusButton = styled(ButtonStyle)`
    background-color: #B34646;
    color: white;
`;

export const AccountButton = styled(ButtonStyle)`
    background-color: white;
    color: black;
`;

export const Button = styled.button`
  background-color: transparent;
  border: 0;
  color: white;

  font-size: 1.1rem;

  &:hover {
    text-decoration: underline;
  }
`;
/////////////////////////////////////
//  Campus container elements part //
/////////////////////////////////////