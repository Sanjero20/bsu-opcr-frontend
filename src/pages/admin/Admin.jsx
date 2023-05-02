import {
    AccountButton,
    CampusButton,
    ContentHolder,
    Separator,
    Selection
} from './Admin.styled';

const Admin = () => {
    return (
        <Separator>
            <Selection>
                <CampusButton>Campus</CampusButton>
                <AccountButton>Account</AccountButton>
            </Selection>
            <ContentHolder>
            </ContentHolder>
        </Separator>
    );
};

export default Admin;