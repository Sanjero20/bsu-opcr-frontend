import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from './Header/Header';
import { LayoutContainer, ContentContainer } from './Layout.styled';
import { getCookie } from '../services/cookieService';

function Layout() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkCookies = async () => {
      const token = getCookie('token');
      const access = getCookie('access');

      if (!token) {
        navigate('/', { replace: true });
        return;
      }
    };

    checkCookies();
  }, []);

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
