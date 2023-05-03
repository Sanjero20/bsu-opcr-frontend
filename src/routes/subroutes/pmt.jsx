import Preview from '../../pages/PMT/preview/Preview';
import Edit from '../../pages/PMT/edit/Edit';
import Landing from '../../pages/PMT/Landing/components/Landing';
const pmtRoutes = [
  {
    index: true,
    element: <Landing />,
  },
  {
    path: 'preview',
    element: <Preview />,
  },
  {
    path: 'edit',
    element: <Edit />,
  },
];

export default pmtRoutes;
