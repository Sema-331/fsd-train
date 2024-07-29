import React from 'react';
import { addTodo, deleteTodo, fetchTodos } from './api';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import Loading from '../ui/Loading';
import Error from '../ui/Error';
import { Todo } from '../../entities/Todo';

const ModifiedApi = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchTodos,
  });

  const mutationAddTodo = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  const mutationDelete = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  const handleDeleteTodo = (e: React.FormEvent, id: string) => {
    e.preventDefault();
    mutationDelete.mutate(id);
  };

  const hadnles = (e: React.FormEvent, todo: Todo) => {
    e.preventDefault();
    mutationAddTodo.mutate(todo);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return { hadnles, data, handleDeleteTodo };
};

export default ModifiedApi;
