import styled from 'styled-components';
import theme from '../../styles/theme';
import { Button } from '../../components/ui/Button.styled';

export const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FooterContainer = styled.div`
  background-color: ${theme.red};
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media screen and (max-height: 768px) {
    height: 100px;
  }
`;

export const HeroSection = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
`;

export const Text = styled.div`
  text-align: center;
  color: ${theme.red};
`;

export const Title = styled.h1`
  font-size: 6rem;
`;

export const Message = styled.p`
  font-size: 2rem;
`;

export const Img = styled.img`
  margin-bottom: 1em;
  height: 350px;

  @media screen and (max-height: 768px) {
    height: 225px;
  }
`;

export const Btn = styled(Button)`
  color: black;
  background-color: white;
  font-weight: bold;
`;
