import { createBrowserRouter } from 'react-router-dom';

// layout
import Main from '../layouts/Main/Main';

// sub-routes
import adminRoutes from './subroutes/admin';
import headRoutes from './subroutes/head';
import pmtRoutes from './subroutes/pmt';

// pages
import Login from '../pages/login/Login';
import Admin from '../pages/admin/Admin';

const routes = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [...adminRoutes],
  },
  {
    path: '/head',
    element: <Main />,
    children: [...headRoutes],
  },
  {
    path: '/pmt',
    // element: <></>,
    children: [...pmtRoutes],
  },
]);

export default routes;
