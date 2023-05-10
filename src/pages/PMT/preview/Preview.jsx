import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonContainer, Button } from '../../../components/ui/Button.styled';
import { Container } from '../../../components/ui/Container.styled';
import { SubButton } from '../departments/Departments.styled';

import Mform from '../../../components/MFO-Form/Mfo';

import { retrieveDepartmentOpcr } from '../../../services/requests';

function Preview() {
  const [targets, setTargets] = useState([]);

  const navigate = useNavigate();
  const { deptID } = useParams();

  // Get deparment opcr based on dept id
  useEffect(() => {
    const getTargets = async () => {
      const { opcr } = await retrieveDepartmentOpcr(deptID);
      setTargets(opcr);
    };

    getTargets();
  }, []);

  const handleComments = (e, targetID, indicatorID) => {
    const updatedComments = targets.map((target) => {
      // If it matches the target ID, loop over its success indicator
      if (target._id === targetID) {
        const { keySuccess } = target;

        const updatedSuccessIndicator = keySuccess.map((indicator) => {
          // If matches the indicator ID, edit the comment
          if (indicator._id === indicatorID) {
            return {
              ...indicator,
              comment: e.target.value,
            };
          }

          return indicator;
        });

        return {
          ...target,
          keySuccess: updatedSuccessIndicator,
        };
      }

      return target;
    });

    setTargets(updatedComments);
  };

  return (
    <Container>
      <Mform targets={targets} handleComments={handleComments} pmt />

      <ButtonContainer>
        <Button yellow onClick={() => navigate('/pmt')}>
          Back
        </Button>
        <Button> Decline </Button>
        <SubButton green> Accept </SubButton>
      </ButtonContainer>
    </Container>
  );
}

export default Preview;
