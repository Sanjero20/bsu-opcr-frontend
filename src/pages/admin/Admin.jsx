import {
    AccountButton,
    CampusButton,
    ContentHolder,
    Separator,
    Selection
} from './Admin.styled';

import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import {IoPeopleCircleOutline} from 'react-icons/io5'

const Admin = () => {
    return (
        <Separator>
            <Selection>
                <CampusButton>
                    Campus <HiOutlineBuildingOffice2 size={70}/>
                    

                </CampusButton>

                <AccountButton>
                    Account <IoPeopleCircleOutline size={70}/>

                </AccountButton>
            </Selection>
            <ContentHolder>
            
            </ContentHolder>
        </Separator>
    );
};

export default Admin;