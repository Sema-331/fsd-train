import React from 'react';
import AddTodo from '../features/AddTodo';
import TodoList from '../widgets/TodoList';

const TodoPage = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default TodoPage;
