import { useNavigate } from 'react-router-dom';

import { Container } from '../../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../..//components/ui/Button.styled';
import { EditField } from './Edit.styled';

function Edit() {
  const navigate = useNavigate();

  return (
    <Container>
      <p>Editing MFO</p>

      <EditField></EditField>

      <ButtonContainer>
        <Button yellow>Reset</Button>
        <Button onClick={() => navigate('/head', { replace: true })}>
          Preview
        </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Edit;
