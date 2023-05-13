import NoPass from '../../../assets/no-pass.gif';
import { Text, Title, Message, Img } from '../Error.styled';

function NoAccess() {
  return (
    <>
      <Text>
        <Title>403</Title>
        <Message>Access denied: You shall not pass! (Gandalf voice).</Message>
      </Text>

      <Img src={NoPass} alt="youshallnotpass.gif" />
    </>
  );
}

export default NoAccess;
