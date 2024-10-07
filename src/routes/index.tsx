import { createBrowserRouter } from 'react-router-dom';
import CoursePage from 'pages/CoursePage';
import ExplorePage from 'pages/ExplorePage';
import HomePage from 'pages/HomePage';
import MessagePage from 'pages/MessagePage';
import MyPage from 'pages/MyPage';

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
