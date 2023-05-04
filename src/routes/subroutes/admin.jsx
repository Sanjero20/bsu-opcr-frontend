import Campus from '../../pages/admin/campus/Campus';
import Accounts from '../../pages/admin/accounts/Accounts';

const adminRoutes = [
  {
    index: true,
    element: <Campus />,
  },
  {
    path: 'accounts',
    element: <Accounts />,
  },
];

export default adminRoutes;
