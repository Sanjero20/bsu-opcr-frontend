import { useEffect } from 'react';
import {
    Button,
    ButtonStyle,
    ContentHolder,
    Separator,
    Selection
} from './Admin.styled';
import { CampusLoader } from './CampusLoader/CampusLoader';
import { saveCookie, deleteCookie, printCookies } from '../../services/cookieService';
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { IoPeopleCircleOutline } from 'react-icons/io5'

const Admin = () => {
    return (
        <Separator>
            <Selection>
                <div>
                    <ButtonStyle>
                        Campus <HiOutlineBuildingOffice2 size={70}/>
                    </ButtonStyle>
                    <ButtonStyle>
                        Account <IoPeopleCircleOutline size={70} color=''/>
                    </ButtonStyle>
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