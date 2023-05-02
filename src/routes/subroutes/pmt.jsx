import Preview from '../../pages/PMT/preview/Preview';
import Edit from '../../pages/PMT/edit/Edit';
const pmtRoutes = [
  {
    index: true,
    element: <Preview />,
  },
  {
    path: 'edit',
    element: <Edit />,
  },
];

export default pmtRoutes;
