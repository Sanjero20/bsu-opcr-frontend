import { useNavigate } from 'react-router-dom';
import { Aside, Button, List, NavLink } from './Sidebar.styled';

import { HiOutlineBuildingOffice2 } from 'react-icons/hi2';
import { IoPeopleCircleOutline } from 'react-icons/io5';
import { BiLogOut } from 'react-icons/bi';

import { deleteCookie } from '../../services/cookieService';

function Sidebar() {
  const navigate = useNavigate();

  const signOut = () => {
    deleteCookie('token');
    deleteCookie('access');
    navigate('/', { replace: true });
  };

  return (
    <Aside>
      <List>
        <NavLink to={'/admin'} end>
          <p>Campus</p>
          <HiOutlineBuildingOffice2 size={50} />
        </NavLink>

        <NavLink to={'accounts'}>
          <p>Account</p>
          <IoPeopleCircleOutline size={50} />
        </NavLink>
      </List>

      <Button onClick={signOut}>
        <BiLogOut size={30} />
        Logout
      </Button>
    </Aside>
  );
}

export default Sidebar;
