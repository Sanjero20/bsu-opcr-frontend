import { RouterProvider } from 'react-router-dom';
import routes from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const closeInMilliseconds = 5000;

function App() {
  return (
    <>
      <RouterProvider router={routes} />;
      <ToastContainer autoClose={closeInMilliseconds} draggable="false" />
    </>
  );
}

export default App;
