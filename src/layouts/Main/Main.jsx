import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Main() {
  return (
    <>
      <Header />
      <Content>
        <Outlet />
      </Content>
    </>
  );
}

export default Main;

const Content = styled.div`
  padding: 1rem;
`;
