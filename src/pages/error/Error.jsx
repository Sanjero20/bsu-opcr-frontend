import catImg from '../../assets/cat.svg';
import noPass from '../../assets/no-pass.gif';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import Header from '../../layouts/Header/Header';
import {
  PageContainer,
  HeroSection,
  FooterContainer,
  Text,
  Title,
  Message,
  Img,
} from './Error.styled';

const message404 = 'But hey, at least you found our cute curious cat.';
const message403 = 'Access denied: You shall not pass! (Gandalf voice).';

function Error({ type }) {
  // const navigate = useNavigate();

  return (
    <PageContainer>
      <Header hide />

      <HeroSection>
        <Text>
          <Title>{type}</Title>
          <Message>
            {type === '404' ? (
              <>
                Page not Found <br />
                {message404}
              </>
            ) : (
              <>{message403}</>
            )}
          </Message>
        </Text>

        {type == '404' ? (
          <Img src={catImg} alt="catimg" is404 />
        ) : (
          <Img src={noPass} alt="gandalf.gif" />
        )}
      </HeroSection>

      <FooterContainer />
    </PageContainer>
  );
}

export default Error;

Error.propTypes = {
  type: PropTypes.string,
};
