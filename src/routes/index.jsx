import { createBrowserRouter } from 'react-router-dom';

// sub-routes
import adminRoutes from './subroutes/admin';
import headRoutes from './subroutes/head';
import pmtRoutes from './subroutes/pmt';

// pages
import Login from '../pages/login/Login';

const routes = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: '/admin',
    // element: <>Admin</>,
    children: [...adminRoutes],
  },
  {
    path: '/head',
    // element: <></>,
    children: [...headRoutes],
  },
  {
    path: '/pmt',
    // element: <></>,
    children: [...pmtRoutes],
  },
]);

export default routes;
