import { createBrowserRouter } from 'react-router-dom';

// layouts
import AdminLayout from '../layouts/AdminLayout';
import Layout from '../layouts/Layout';

// sub-routes
import adminRoutes from './subroutes/admin';
import headRoutes from './subroutes/head';
import pmtRoutes from './subroutes/pmt';

// pages
import Login from '../pages/login/Login';
import Error from '../pages/error/Error';

const routes = createBrowserRouter([
  {
    index: true,
    element: <Login />,
  },
  {
    path: '/admin',
    element: <AdminLayout />,
    children: [...adminRoutes],
  },
  {
    path: '/head',
    element: <Layout />,
    children: [...headRoutes],
  },
  {
    path: '/pmt',
    element: <Layout />,
    children: [...pmtRoutes],
  },
  {
    path: '*',
    element: <Error type={'404'} />,
  },
]);

export default routes;
