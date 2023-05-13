import CatImg from '../../../assets/cat.svg';
import styled from 'styled-components';
import { Text, Title, Message, Img } from '../Error.styled';

function NotFound() {
  return (
    <>
      <TextAdjust>
        <Title>404</Title>
        <Message>
          Page not found. <br />
          But hey, at least you found our cute curious cat.
        </Message>
      </TextAdjust>

      <ImgNoPad src={CatImg} alt="youshallnotpass.gif" />
    </>
  );
}

export default NotFound;

const TextAdjust = styled(Text)`
  transform: translateY(-4em);
`;

const ImgNoPad = styled(Img)`
  position: absolute;
  bottom: -3em;

  @media screen and (max-height: 768px) {
    bottom: -2.5em;
  }
`;
