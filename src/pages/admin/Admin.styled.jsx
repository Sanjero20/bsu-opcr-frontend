import styled from 'styled-components';
import theme from '../../styles/theme';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';


export const Separator = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: calc(20% - 0.5rem) calc(80% - 0.5rem);
    column-gap: 1rem;
`;

export const Selection = styled.div`
    background-color: ${theme.red};
    padding-top: 2rem;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 1px 1px 2px gray;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
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

    font-size: 1.30rem;
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 3.5rem 5.5rem ;
    border-radius: 15px;

    &:active {
        transform: translateY(1.5px);
        box-shadow: 0px 1.5px 1.5px 1.5px #670F0F;
    }
`;

export let CampusButton = styled(ButtonStyle)`
    background-color: #B34646;
    color: white;
    
`;




export const AccountButton = styled(ButtonStyle)`
    background-color: white;
    color: black;
    
`;

/////////////////////////////////////
//  Campus container elements part // 
/////////////////////////////////////