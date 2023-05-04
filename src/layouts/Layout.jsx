import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

import { LayoutContainer, ContentContainer } from './Layout.styled';

function Layout() {
  return (
    <LayoutContainer>
      <Header />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </LayoutContainer>
  );
}

export default Layout;
