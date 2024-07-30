import { createBrowserRouter } from 'react-router-dom';
import TodoPage from '../../pages';
import MainLayout from '../../shared/ui/MainLayout/MainLayout';
import SinglePage from '../../pages/SingleTodoPage/SinglePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TodoPage />,
      },
      {
        path: ':id',
        element: <SinglePage />,
      },
    ],
  },
]);
