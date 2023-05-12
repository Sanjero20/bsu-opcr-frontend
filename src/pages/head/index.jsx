import { useState, useEffect } from 'react';

import Preview from './preview/Preview';
import Edit from './edit/Edit';

import { Container } from '../../components/ui/Container.styled';
import { retrieveHeadOpcr, createOpcr } from '../../services/requests';
import BtnContainer from './edit/components/BtnContainer';

import { showErrorToast, showSuccessToast } from '../../helpers/toast';

function Head() {
  const [status, setStatus] = useState('');
  const [targets, setTargets] = useState([]);
  const [isOnPreview, setIsOnPreview] = useState(true);

  useEffect(() => {
    const getOPCR = async () => {
      try {
        const response = await retrieveHeadOpcr();
        if (response.error) throw response.error;
        setStatus(response.status);
        setTargets(response.opcr);
      } catch (error) {
        showErrorToast('Something went wrong, Try again');
        console.log(error);
      }
    };

    getOPCR();
  }, [retrieveHeadOpcr]);

  const toggleState = () => {
    setIsOnPreview(!isOnPreview);
  };

  const resetTargets = () => {
    setTargets([]);
  };

  const sendForCalibration = async () => {
    const response = await createOpcr({ opcr: targets });

    if (response.error) {
      showErrorToast(response.error);
      return;
    }

    setStatus('Calibrating');
    showSuccessToast('Submitted for calibration');
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
