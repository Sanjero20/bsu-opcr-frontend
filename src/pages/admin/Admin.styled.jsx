import styled from 'styled-components';

const coloring = {
    'bg': '#434343',
    'bgShadow': '#333333',
    'btnCampus': '#4B66F9',
    'btnCampusActive': '#5d76fc',
    'btnAccounts': '#FF4242',
    'btnAccountsActive': '#ff6363',
    'formColor': '#242424'
};

export const AbsContainer = styled.div`
    background-color: ${coloring.bg};
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: grid;
    align-items: center;
    grid-template-columns: 25% 75%;
`;

export const ButtonRef = styled.button`
    cursor: pointer;
    padding: 7rem;
    width: 90%;
    border-radius: 25px;
    box-shadow: 0px 5px 5px 0px ${coloring.bgShadow};
`;

export const CampusButton = styled(ButtonRef)`
    background-color: ${coloring.btnCampus};
    &:active {
        background-color: ${coloring.btnCampusActive};
    }
`;
    
export const AccountsButton = styled(ButtonRef)`
    background-color: ${coloring.btnAccounts};
    &:active {
        background-color: ${coloring.btnAccountsActive};
    }
`;

export const FormHolder = styled.div`
    background-color: ${coloring.formColor};
    border-radius: 25px;
    box-shadow: 0px 5px 5px 0px ${coloring.bgShadow};
    height: 100%;
    width: 100%;
`;

export const Separator = styled.div`
    margin: 0 auto;
    height: 95%;
    width: 95%;
    display: flex;
`;
    
export const RightSeparator = styled(Separator)`
    align-items: center;
    justify-contents: center;
`;
    
export const LeftSeparator = styled(Separator)`
    row-gap: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
    
