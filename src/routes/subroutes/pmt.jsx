import Landing from '../../pages/PMT/Landing/components/Landing';
import Index from '../../pages/PMT/Index';
const pmtRoutes = [
  {
    index: true,
    element: <Landing />,
  },
  {
    path: 'preview',
    element: <Index />,
  },
];

export default pmtRoutes;
