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
        className="input1"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="input1"
      />
      <Input
        className="input2"
        value={secondTitle}
        onChange={e => setSecondTitle(e.target.value)}
        placeholder="input2"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddTodo;
