import BsuLogo from '../../assets/bsu-logo.svg';
import styled from 'styled-components';
import theme from '../../styles/theme';

function Header() {
  return (
    <Container>
      <Logo src={BsuLogo} alt="logo" />
      <p>Office Performance Management System</p>
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
  gap: 1rem;
  padding: 1.5rem;

  font-size: 1.25rem;
`;

const Logo = styled.img`
  height: 60px;
  width: auto;
`;
