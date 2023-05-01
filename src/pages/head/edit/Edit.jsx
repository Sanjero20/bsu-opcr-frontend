import { useNavigate } from 'react-router-dom';

import { Container } from '../../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../..//components/ui/Button.styled';

import EditForm from './components/EditForm';

function Edit() {
  const navigate = useNavigate();

  return (
    <Container>
      <p>Editing MFO</p>

      <EditForm />

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
