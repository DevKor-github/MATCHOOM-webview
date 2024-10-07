import { createBrowserRouter } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import MyPage from '../pages/MyPage';
import CoursePage from '../pages/CoursePage';
import ExplorePage from '../pages/ExplorePage';
import MessagePage from '../pages/MessagePage';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/homepage',
      element: <HomePage />,
    },
    {
      path: '/mypage',
      element: <MyPage />,
    },
    {
      path: '/coursepage',
      element: <CoursePage />,
    },
    {
      path: '/explorepage',
      element: <ExplorePage />,
    },
    {
      path: '/messagepage',
      element: <MessagePage />,
    },
  ]);
};
