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

  return (
    <Container>
      <Mform targets={targets} pmt />

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
