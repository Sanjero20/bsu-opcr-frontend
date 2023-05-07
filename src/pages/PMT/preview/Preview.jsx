import PropTypes from 'prop-types';
import React from 'react';
import { ButtonContainer, Button } from '../../../components/ui/Button.styled';
import { Container } from '../../../components/ui/Container.styled';
import Mform from '../../../components/MFO-Form/Mfo';

export const TargetContext = React.createContext();

function Preview({ targets }) {
  console.log(targets);
  return (
    <Container>
      <Mform targets={targets} />
      <ButtonContainer>
        <Button onClick={console.log('hey')}>Submit</Button>
      </ButtonContainer>
    </Container>
  );
}

export default Preview;
