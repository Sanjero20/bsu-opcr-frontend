import BsuLogo from '../../assets/bsu-logo.svg';

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styles/theme';

import { BiPowerOff } from 'react-icons/bi';

import { deleteCookie } from '../../services/cookieService';

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

const Container = styled.header`
  background-color: ${theme.red};
  color: white;
  height: 85px;

  display: flex;
  align-items: center;

  justify-content: space-between;

  padding: 1.5rem;
  font-size: 1.25rem;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25em;
  color: ${theme.red};
  background-color: white;
  padding: 0.25em 0.75em;
  border-radius: 25px;
`;

Header.propTypes = {
  hide: PropTypes.bool,
};
