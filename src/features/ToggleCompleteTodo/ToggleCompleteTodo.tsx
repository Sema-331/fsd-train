import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { patchTodo } from '../../shared/TodoApi/api';
import { ToggleInt } from './model';

const ToggleCompleteTodo = ({ todo }: ToggleInt) => {
  const queryClient = useQueryClient();

  const mutationPatch = useMutation({
    mutationFn: ({ id, data }: any) => patchTodo(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  const handleUpdateTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    const updatedData = { completed: !todo.completed };
    mutationPatch.mutate({ id: todo.id, data: updatedData });
  };

  return (
    <input
      onChange={handleUpdateTodo}
      type="checkbox"
      checked={todo.completed}
    />
  );
};

export default ToggleCompleteTodo;
