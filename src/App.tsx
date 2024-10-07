import { RouterProvider } from 'react-router-dom';
import { createRouter } from 'routes';

const App = () => {
  const router = createRouter();
  return <RouterProvider router={router} />;
};

export default App;
