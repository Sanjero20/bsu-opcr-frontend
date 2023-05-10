import Pmt from '../../pages/PMT/index';
import Preview from '../../pages/PMT/preview/Preview';

const pmtRoutes = [
  {
    index: true,
    element: <Pmt />,
  },
  {
    path: '/pmt/:deptID',
    element: <Preview />,
  },
];

export default pmtRoutes;
