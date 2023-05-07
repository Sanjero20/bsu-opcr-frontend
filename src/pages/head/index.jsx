import { useState, useEffect } from 'react';

import Preview from './preview/Preview';
import Edit from './edit/Edit';

import { Container } from '../../components/ui/Container.styled';
import { Button, ButtonContainer } from '../../components/ui/Button.styled';
import { retrieveHeadOpcr, createOpcr } from '../../services/requests';

function Head() {
  const [status, setStatus] = useState('');
  const [targets, setTargets] = useState([]);
  const [isOnPreview, setIsOnPreview] = useState(true);

  useEffect(() => {
    const getOPCR = async () => {
      const response = await retrieveHeadOpcr();
      const { opcr, status } = await response;

      setStatus(status);
      setTargets(opcr);
    };

    getOPCR();
  }, []);

  const toggleState = () => {
    setIsOnPreview(!isOnPreview);
  };

  const sendForCalibration = async () => {
    const response = await createOpcr({ opcr: targets });

    console.log(response);

    // Todo update local changes
    // ? update status to callibrating when response has no error
  };

  return (
    <Container>
      <p>Status: {status}</p>

      {isOnPreview ? (
        <Preview targets={targets} />
      ) : (
        <Edit targets={targets} setTargets={setTargets} />
      )}

      <ButtonContainer>
        {isOnPreview && status === 'Calibrated' && (
          <Button onClick={() => window.print()}> Print</Button>
        )}

        <Button
          yellow
          onClick={toggleState}
          disabled={status === 'Calibrating'}
        >
          {isOnPreview ? <>Edit</> : <>Preview</>}
        </Button>

        {isOnPreview ? (
          <Button
            onClick={sendForCalibration}
            disabled={status === 'Calibrating'}
          >
            {' '}
            Submit
          </Button>
        ) : (
          <Button>Reset</Button>
        )}
      </ButtonContainer>
    </Container>
  );
}

export default Head;
