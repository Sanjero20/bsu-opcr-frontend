import Preview from '../../pages/head/preview/Preview';
import Edit from '../../pages/head/edit/Edit';

const headRoutes = [
  {
    index: true,
    element: <Preview />,
  },
  {
    path: 'edit',
    element: <Edit />,
  },
];

export default headRoutes;
