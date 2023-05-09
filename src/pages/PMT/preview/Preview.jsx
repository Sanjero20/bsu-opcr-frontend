import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { ButtonContainer, Button } from '../../../components/ui/Button.styled';
import { Container } from '../../../components/ui/Container.styled';

import Mform from '../../../components/MFO-Form/Mfo';

import { DepartmentContext } from '../index';

export const TargetContext = React.createContext();

function Preview({ targets }) {
  const { changeMode } = useContext(DepartmentContext);

  return (
    <Container>
      <Mform targets={targets} />
      <ButtonContainer>
        <Button onClick={console.log('hey')}>Submit</Button>

        <Button onClick={() => changeMode('landing')}> Back </Button>
      </ButtonContainer>
    </Container>
  );
}

export default Preview;

Preview.propTypes = {
  targets: PropTypes.array.isRequired,
};
