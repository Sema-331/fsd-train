import React from 'react';
import TodoPage from '../pages';
import TanstackProvider from './Provider/TanstackProvider';

const App = () => {
  return (
    <TanstackProvider>
      <TodoPage />
    </TanstackProvider>
  );
};

export default App;
