import {
    AccountButton,
    CampusButton,
    Button,
    ContentHolder,
    Separator,
    Selection
} from './Admin.styled';
import { CampusLoader } from './CampusLoader/CampusLoader';

import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { IoPeopleCircleOutline } from 'react-icons/io5'

const Admin = () => {
    return (
        <Separator>
            <Selection>
                <div>
                    <CampusButton>
                        Campus <HiOutlineBuildingOffice2 size={70}/>
                    </CampusButton>
                    <AccountButton>
                        Account <IoPeopleCircleOutline size={70} color=''/>
                    </AccountButton>
                </div>
                <Button onClick={() => auth.logout('/')}> Logout </Button>
            </Selection>
            <ContentHolder>
                <div className='gridItem'>
                    <CampusLoader campuses={['Alangilan', 'Main', 'Pablo Borbon']}/>
                </div>
            </ContentHolder>
        </Separator>
    );
};

export default Admin;