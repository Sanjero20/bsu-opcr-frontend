import { useEffect, useState } from 'react';
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

  useEffect(() => {
    console.log(targets);
  }, [targets]);

  const addTarget = () => {
    const newTarget = createNewTargetObj();
    // Update the state of targets
    const updated = [...targets, newTarget];
    setTargets(updated);
  };

  const addSuccessIndicator = (id) => {
    const updatedTargets = targets.map((target) => {
      // Add new success indicator if it matches the ID
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

  const deleteSuccessIndicator = (targetId, indicatorId) => {
    let updatedTargets = targets.map((target) => {
      if (target.id == targetId) {
        const { keySuccess } = target;

        // Remove the success indicator that matches the id
        const updatedList = keySuccess.filter(
          (indicator) => indicator.id != indicatorId
        );

        // Delete the whole target/row if the success indicator is empty
        if (updatedList.length == 0) {
          return null;
        }

        return {
          ...target,
          keySuccess: updatedList,
        };
      }
      return target;
    });

    updatedTargets = updatedTargets.filter((target) => target != null);

    setTargets(updatedTargets);
  };

  const editTarget = (e, targetId) => {
    const updated = targets.map((target) => {
      if (target.id == targetId) {
        return {
          ...target,
          target: e.target.value,
        };
      }

      return target;
    });

    setTargets(updated);
  };

  return (
    <Container>
      <p>Editing MFO</p>

      <EditField>
        <EditHeader />
        <EditForm
          targets={targets}
          addSuccessIndicator={addSuccessIndicator}
          deleteSuccessIndicator={deleteSuccessIndicator}
          editTarget={editTarget}
        />
        <BtnAdd onClick={addTarget}>Add</BtnAdd>
      </EditField>

      <ButtonContainer>
        <Button yellow onClick={() => navigate('/head', { replace: true })}>
          Preview
        </Button>
        <Button>Reset</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Edit;
