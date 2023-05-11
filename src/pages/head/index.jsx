import { useState, useEffect } from 'react';

import Preview from './preview/Preview';
import Edit from './edit/Edit';

import { Container } from '../../components/ui/Container.styled';
import { retrieveHeadOpcr, createOpcr } from '../../services/requests';
import BtnContainer from './edit/components/BtnContainer';

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

  const resetTargets = () => {
    setTargets([]);
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

      <BtnContainer
        status={status}
        isOnPreview={isOnPreview}
        toggleState={toggleState}
        resetTargets={resetTargets}
        sendForCalibration={sendForCalibration}
      />
    </Container>
  );
}

export default Head;
