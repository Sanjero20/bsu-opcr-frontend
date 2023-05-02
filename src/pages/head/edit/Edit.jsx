import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// styles
import { Container } from '../../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../../components/ui/Button.styled';
import { EditField, Button as BtnAdd } from './Edit.styled';

// subcomponents
import EditForm from './components/EditForm';
import EditHeader from './components/EditHeader';

// helpers
import {
  createNewTargetObj,
  createSuccessIndicatorObj,
} from '../../../helpers/targets';

const initialState = createNewTargetObj();

function Edit() {
  const [targets, setTargets] = useState([initialState]);

  const navigate = useNavigate();

  const addTarget = () => {
    const newTarget = createNewTargetObj();

    // Update the state of targets
    const updated = [...targets, newTarget];
    setTargets(updated);
  };

  const addSuccessIndicator = (id) => {
    const updatedTargets = targets.map((target) => {
      if (target.id == id) {
        return {
          ...target,
          keySuccess: [...target.keySuccess, createSuccessIndicatorObj()],
        };
      }

      return target;
    });

    setTargets(updatedTargets);
  };

  return (
    <Container>
      <p>Editing MFO</p>

      <EditField>
        <EditHeader />
        <EditForm targets={targets} addSuccessIndicator={addSuccessIndicator} />
        <BtnAdd onClick={addTarget}>Add</BtnAdd>
      </EditField>

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
