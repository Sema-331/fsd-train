import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Todo } from '../../entities/Todo';

const BASE_URL = 'http://localhost:3001/posts';

export const fetchTodos = async (): Promise<Todo[]> => {
  try {
    const res = await fetch(BASE_URL);
    if (!res.ok) {
      throw new Error('Failed to fetch todos');
    }
    return res.json();
  } catch (error) {
    throw Error('error: ' + error);
  }
};

export const addTodo = async (todo: Todo): Promise<void> => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
  if (!res.ok) {
    throw new Error('Failed to add todo');
  }
};

export const deleteTodo = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3001/posts/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Failed to delete the todo item');
    }
    return id;
  } catch (error) {
    console.error('Error deleting todo:', error);
    throw error;
  }
};
