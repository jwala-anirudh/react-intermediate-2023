import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

import { Todo } from './Todo.model';

const useTodos = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.data);

  return useQuery<Todo[], Error>({
    queryKey: ['todos'],
    queryFn: fetchTodos,
  });
};

export default useTodos;
