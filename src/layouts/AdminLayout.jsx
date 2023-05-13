import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Error from '../pages/error/Error';

import { LayoutContainer, ContentContainer, Content } from './Layout.styled';

import { getCookie } from '../services/cookieService';

function AdminLayout() {
  const [hasAccess, setHasAccess] = useState(true);
  const navigate = useNavigate(0);

  useEffect(() => {
    const token = getCookie('token');
    const access = getCookie('access');

    if (!token) {
      navigate('/', { replace: true });
      return;
    }

    if (access !== 'admin') {
      setHasAccess(false);
      return;
    }
  }, []);

  return (
    <LayoutContainer>
      {hasAccess ? (
        <>
          <Header hide />
          <Main>
            <Sidebar />
            <Content>
              <Outlet />
            </Content>
          </Main>
        </>
      ) : (
        <Error type={403} />
      )}
    </LayoutContainer>
  );
}

export default AdminLayout;

const Main = styled(ContentContainer)`
  display: flex;
  gap: 0.75em;
`;
