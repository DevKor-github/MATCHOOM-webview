import { RouterProvider } from 'react-router-dom';
import { createRouter } from 'routes';
import useAxiosInterceptor from 'hooks/useAxiosInterceptor';
import Provider from 'components/common/Provider';

const App = () => {
  useAxiosInterceptor();
  const router = createRouter();
  return (
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
