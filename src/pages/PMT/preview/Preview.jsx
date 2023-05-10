import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { ButtonContainer, Button } from '../../../components/ui/Button.styled';
import { Container } from '../../../components/ui/Container.styled';
import { SubButton } from '../departments/Departments.styled';

import Mform from '../../../components/MFO-Form/Mfo';

import {
  retrieveDepartmentOpcr,
  acceptOpcr,
  declineOpcr,
} from '../../../services/requests';

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

  const declineForm = async () => {
    const filtered = targets.map((target) => {
      const filteredIndicators = target.keySuccess.map((indicator) => {
        return {
          id: indicator._id,
          comment: indicator.comment,
        };
      });

      return {
        targetID: target._id,
        successIDs: [...filteredIndicators],
      };
    });

    const opcrDetails = { departmentID: deptID, targets: filtered };

    console.log(opcrDetails);

    const response = await declineOpcr(opcrDetails);

    console.log(response);
  };

  const acceptForm = async () => {
    const response = await acceptOpcr({ deptID });

    console.log(response);
  };

  return (
    <Container>
      <Mform targets={targets} handleComments={handleComments} pmt />

      <ButtonContainer>
        <Button yellow onClick={() => navigate('/pmt')}>
          Back
        </Button>
        <Button onClick={declineForm}> Decline </Button>
        <SubButton green onClick={acceptForm}>
          {' '}
          Accept{' '}
        </SubButton>
      </ButtonContainer>
    </Container>
  );
}

export default Preview;
