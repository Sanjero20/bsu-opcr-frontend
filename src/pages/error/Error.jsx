import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import {
  PageContainer,
  HeroSection,
  FooterContainer,
  Btn,
} from './Error.styled';

// error components
import NotFound from './components/NotFound';
import NoAccess from './components/NoAccess';

import { getCookie } from '../../services/cookieService';

function Error({ type }) {
  const navigate = useNavigate();

  const goBackToWork = () => {
    const permission = getCookie('access');

    switch (permission) {
      case 'admin':
      case 'head':
      case 'pmt':
        navigate(`/${permission}`, { replace: true });
        break;
      default:
        navigate('/', { replace: true });
    }
  };

  return (
    <PageContainer>
      <Header hide />

      <HeroSection>
        {type === 403 && <NoAccess />}
        {type === 404 && <NotFound />}
      </HeroSection>

      <FooterContainer>
        <Btn onClick={goBackToWork}>Back to work</Btn>
      </FooterContainer>
    </PageContainer>
  );
}

export default Error;

Error.propTypes = {
  type: PropTypes.number,
};
