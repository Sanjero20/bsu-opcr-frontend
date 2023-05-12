import PropTypes from 'prop-types';
import BsuLogo from '../../assets/bsu-logo.svg';
import { useNavigate } from 'react-router-dom';
import { BiPowerOff } from 'react-icons/bi';
import { deleteCookie } from '../../services/cookieService';

import { Container, Flex, Logo, Button } from './Header.styled';

function Header(props) {
  const navigate = useNavigate();

  const logout = () => {
    deleteCookie('token');
    deleteCookie('access');
    navigate('/');
  };

  return (
    <Container>
      <Flex>
        <Logo src={BsuLogo} alt="logo" />
        <p>Office Performance Management System</p>
      </Flex>

      {!props.hide && (
        <div>
          <Button onClick={logout}>
            <BiPowerOff size={30} />
            Logout
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Header;

Header.propTypes = {
  hide: PropTypes.bool,
};
