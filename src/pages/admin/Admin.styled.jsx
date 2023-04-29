import styled from 'styled-components';

const coloring = {
    'bg': 'wheat',
    'bgShadow': '#857659',
    'btnCampus': '#3424ab',
    'btnAccounts': '#db2348'
};

export const AbsContainer = styled.div`
    background-color: ${coloring.bg};
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    gap: 2rem;
    align-items: center;
`;

export const IntroSelection = styled.div`
    cursor: pointer;
    padding: 7rem;
    padding-left: 10rem;
    padding-right: 10rem;
    border-radius: 10px;
    box-shadow: 0px 5px 5px 0px ${coloring.bgShadow};
    transition: 0.5s;

    &:hover {
        padding: 8rem;
        padding-left: 10.5rem;
        padding-right: 10.5rem;
        box-shadow: 0px 5px 15px 5px ${coloring.bgShadow};
        transform: translateY(-0.25rem);
    }
`;

export const CampusButton = styled(IntroSelection)`
    background-color: ${coloring.btnCampus};
`;

export const AccountsButton = styled(IntroSelection)`
    background-color: ${coloring.btnAccounts};
`;