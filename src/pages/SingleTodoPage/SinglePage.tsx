import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchTodo } from '../../shared/TodoApi/api';
import Error from '../../shared/ui/Error';
import Loading from '../../shared/ui/Loading';

const SinglePage = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ['todo'],
    queryFn: () => fetchTodo(id as string),
  });

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return <div>SinglePage - {data?.title}</div>;
};

export default SinglePage;
