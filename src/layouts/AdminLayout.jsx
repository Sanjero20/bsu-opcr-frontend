import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import { LayoutContainer, ContentContainer, Content } from './Layout.styled';
import Sidebar from './Sidebar/Sidebar';

function AdminLayout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </ContentContainer>
    </LayoutContainer>
  );
}

export default AdminLayout;
