import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  padding: 1rem;
  height: calc(100vh - 85px);
`;
