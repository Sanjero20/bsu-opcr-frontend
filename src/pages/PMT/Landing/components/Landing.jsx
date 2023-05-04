import React from 'react';
import { Container } from './Styled';
import { Input, Depts, Divider } from './Styled';
import styled from 'styled-components';
function Landing() {
  const arr = [
    { name: 'hey' },
    { name: 'kenn' },
    { name: 'joshua' },
    { name: 'joshua' },
    { name: 'joshua' },
    { name: 'joshua' },
    { name: 'kenn' },
    { name: 'joshua' },
    { name: 'joshua' },
    { name: 'joshua' },
    { name: 'joshua' },
  ];
  const Mapped = arr.map((nam) => (
    <Depts onClick={() => console.log('hehe')}>{nam.name} </Depts>
  ));
  return (
    <Container>
      <Input placeholder='Search' />
      <Divider>{Mapped}</Divider>
    </Container>
  );
}

export default Landing;
