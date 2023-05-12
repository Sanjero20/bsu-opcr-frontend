import styled from 'styled-components';
import theme from '../../styles/theme';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  background-color: ${theme.red};
  height: 150px;
  z-index: 2;

  @media screen and (max-height: 768px) {
    height: 100px;
  }
`;

export const HeroSection = styled.div`
  padding-top: 3rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const Text = styled.div`
  text-align: center;
  color: ${theme.red};
`;

export const Title = styled.h1`
  font-size: 4rem;
`;

export const Message = styled.p`
  font-size: 2rem;
`;

export const Img = styled.img`
  margin-bottom: 1em;
  transform: ${({ is404 }) => (is404 ? 'translateY(3em) ' : null)};

  height: 350px;

  @media screen and (max-height: 768px) {
    height: 250px;
  }
`;
