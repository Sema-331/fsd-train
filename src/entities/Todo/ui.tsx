import React from 'react';
import { Todo } from './model';
import DeleteTodo from '../../features/DeleteTodo/DeleteTodo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.secondTitle}</p>
      <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
      <DeleteTodo id={todo.id} />
    </div>
  );
};
