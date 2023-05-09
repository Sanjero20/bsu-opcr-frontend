import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import { ButtonContainer, Button } from '../../../components/ui/Button.styled';
import { Container } from '../../../components/ui/Container.styled';
import { SubButton } from '../Landing/components/Styled';
import Mform from '../../../components/MFO-Form/Mfo';

import { DepartmentContext } from '../index';

export const TargetContext = React.createContext();

function Preview({ targets }) {
  const { changeMode } = useContext(DepartmentContext);

  return (
    <Container>
      <Mform targets={targets} />
      <ButtonContainer>
        <SubButton onClick={() => changeMode('landing')}> Back </SubButton>
        <Button yellow onClick={() => changeMode('landing')}>
          {' '}
          Edit{' '}
        </Button>
        <Button onClick={() => changeMode('landing')}> Decline </Button>

        <SubButton green onClick={() => changeMode('landing')}>
          {' '}
          Accept{' '}
        </SubButton>
      </ButtonContainer>
    </Container>
  );
}

export default Preview;

Preview.propTypes = {
  targets: PropTypes.array.isRequired,
};
