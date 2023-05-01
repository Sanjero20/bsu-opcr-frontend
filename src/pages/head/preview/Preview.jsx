import Mform from '../../../components/MFO-Form/Mfo';
import { Button } from '../../../components/ui/Button.styled';
import { Container, ButtonContainer } from './Preview.styled';

function Preview() {
  return (
    <Container>
      <p>Status: Callibrating</p>

      <Mform />

      <ButtonContainer>
        <Button yellow>Edit</Button>
        <Button>Submit</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Preview;
