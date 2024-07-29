import React from 'react';
import { Button } from '../../shared/ui/Button';
import ModifiedApi from '../../shared/TodoApi/modifiedApi';
import { deleteTodo } from '../../shared/TodoApi/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const DeleteTodo = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();

  const mutationDelete = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  const handleDeleteTodo = (id: string, e?: React.FormEvent) => {
    e?.preventDefault();
    mutationDelete.mutate(id);
  };

  return (
    <Button onСlick={() => handleDeleteTodo(id)} type="button">
      Delete todo
    </Button>
  );
};

export default DeleteTodo;
