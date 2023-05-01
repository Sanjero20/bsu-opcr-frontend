import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

function Main() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Main;
