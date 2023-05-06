import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';

import { LayoutContainer, ContentContainer, Content } from './Layout.styled';

import { getCookie } from '../services/cookieService';

function AdminLayout() {
  const navigate = useNavigate(0);

  useEffect(() => {
    const checkCookies = async () => {
      const token = await getCookie('token');
      const access = await getCookie('access');

      if (!token) {
        navigate('/', { replace: true });
        return;
      }
    };

    checkCookies();
  }, []);

  return (
    <LayoutContainer>
      <Header hide />
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
