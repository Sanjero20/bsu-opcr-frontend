import React from 'react';
import { Container } from '../../../../components/ui/Container.styled';
import { Input } from './Styled';
import styled from 'styled-components';
function Landing() {
  return (
    <Container>
      <Input placeholder='Search' />
      <div>
        <Depts />
      </div>
    </Container>
  );
}

export default Landing;

const Depts = styled.div`
  height: 180px;
  width: 250px;
  border-radius: 20px;
  background-color: grey;
`;
