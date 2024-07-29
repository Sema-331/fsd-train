import React, { useState } from 'react';
import { addTodo } from '../../shared/TodoApi/api';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import ModifiedApi from '../../shared/TodoApi/modifiedApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [secondTitle, setSecondTitle] = useState('');

  const queryClient = useQueryClient();

  const handleOnSubmit = async () => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      secondTitle,
      completed: false,
    };
    await addTodo(newTodo);
  };

  const mutationAddTodo = useMutation({
    mutationFn: handleOnSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todo'] });
    },
  });

  const hadnles = (e: React.FormEvent) => {
    e.preventDefault();
    mutationAddTodo.mutate();
  };

  return (
    <form onSubmit={hadnles}>
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Input
        value={secondTitle}
        onChange={e => setSecondTitle(e.target.value)}
        placeholder="Second Title"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddTodo;
