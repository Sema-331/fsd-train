import React from 'react';
import { Todo } from './model';
import DeleteTodo from '../../features/DeleteTodo/DeleteTodo';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchTodo } from '../../shared/TodoApi/api';
import ToggleCompleteTodo from '../../features/ToggleCompleteTodo/ToggleCompleteTodo';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <p>{todo.title}</p>
      <p>{todo.secondTitle}</p>
      <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
      <ToggleCompleteTodo todo={todo} />
      <DeleteTodo id={todo.id} />
    </div>
  );
};
