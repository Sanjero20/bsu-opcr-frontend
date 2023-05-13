import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from './Header/Header';
import Error from '../pages/error/Error';

import { LayoutContainer, ContentContainer } from './Layout.styled';
import { getCookie } from '../services/cookieService';

function Layout({ type }) {
  const [hasAccess, setHasAccess] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('token');
    const access = getCookie('access');

    if (!token) {
      navigate('/', { replace: true });
      return;
    }

    if (type !== access) {
      setHasAccess(false);
      return;
    }

    setHasAccess(true);
  }, [navigate]);

  return (
    <LayoutContainer>
      {hasAccess ? (
        <>
          <Header />
          <ContentContainer>
            <Outlet />
          </ContentContainer>
        </>
      ) : (
        <Error type={403} />
      )}
    </LayoutContainer>
  );
}

export default Layout;

Layout.propTypes = {
  type: PropTypes.string.isRequired,
};
