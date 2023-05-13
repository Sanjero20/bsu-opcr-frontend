import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import { PageContainer, HeroSection, FooterContainer } from './Error.styled';

// error components
import NotFound from './components/NotFound';
import NoAccess from './components/NoAccess';

function Error({ type }) {
  // const navigate = useNavigate();

  return (
    <PageContainer>
      <Header hide />

      <HeroSection>
        {type === 403 && <NoAccess />}
        {type === 404 && <NotFound />}
      </HeroSection>

      <FooterContainer />
    </PageContainer>
  );
}

export default Error;

Error.propTypes = {
  type: PropTypes.number,
};
