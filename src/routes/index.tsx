import { createBrowserRouter } from 'react-router-dom';
import CoursePage from 'pages/CoursePage';
import ExplorePage from 'pages/ExplorePage';
import HomePage from 'pages/HomePage';
import MessagePage from 'pages/MessagePage';
import MyPage from 'pages/MyPage';

export const createRouter = () => {
  return createBrowserRouter([
    {
      path: '/home',
      element: <HomePage />,
    },
    {
      path: '/my',
      element: <MyPage />,
    },
    {
      path: '/course',
      element: <CoursePage />,
    },
    {
      path: '/explore',
      element: <ExplorePage />,
    },
    {
      path: '/message',
      element: <MessagePage />,
    },
  ]);
};
