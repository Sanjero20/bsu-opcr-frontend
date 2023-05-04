import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import { LayoutContainer, ContentContainer, Content } from './Layout.styled';

function AdminLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Main>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Main>
    </LayoutContainer>
  );
}

export default AdminLayout;

const Main = styled(ContentContainer)`
  display: flex;
  gap: 0.75em;
`;
