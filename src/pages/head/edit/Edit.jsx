import { Container } from '../../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../..//components/ui/Button.styled';

import { EditField } from './Edit.styled';

function Edit() {
  return (
    <Container>
      <p>Editing MFO</p>

      <EditField></EditField>

      <ButtonContainer>
        <Button yellow>Reset</Button>
        <Button>Preview</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Edit;
