import Mform from '../../../components/MFO-Form/Mfo';
import { Container } from '../../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../../components/ui/Button.styled';

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
