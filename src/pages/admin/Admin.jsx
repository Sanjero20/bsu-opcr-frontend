import {
    AbsContainer,
    AccountsButton,
    CampusButton,
    FormHolder,
    LeftSeparator,
    RightSeparator
} from "./Admin.styled";

const Admin = () => {
    return (
        <AbsContainer>
            <LeftSeparator>
                <CampusButton></CampusButton>
                <AccountsButton></AccountsButton>
            </LeftSeparator>
            <RightSeparator>
                <FormHolder></FormHolder>
            </RightSeparator>
        </AbsContainer>
    );
};

export default Admin;