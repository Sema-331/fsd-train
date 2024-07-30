import React from 'react';
import TodoPage from '../pages';
import TanstackProvider from './Provider/TanstackProvider';
import { Route, RouterProvider, Routes } from 'react-router-dom';
import SinglePage from '../pages/SingleTodoPage/SinglePage';
import { router } from './Provider/RouterProvider';

const App = () => {
  return (
    <TanstackProvider>
      <RouterProvider router={router} />
    </TanstackProvider>
  );
};

export default App;
