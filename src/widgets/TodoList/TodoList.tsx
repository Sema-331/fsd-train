import React, { useEffect, useState } from 'react';
import { Todo, TodoItem } from '../../entities/Todo';
import { fetchTodos } from '../../shared/TodoApi/api';
import { useQuery } from '@tanstack/react-query';
import Error from '../../shared/ui/Error';
import Loading from '../../shared/ui/Loading';

const TodoList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: fetchTodos,
  });

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      {data?.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
