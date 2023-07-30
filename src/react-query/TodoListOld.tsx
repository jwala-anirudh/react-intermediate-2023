import { useEffect, useState } from 'react';
import axios from 'axios';

import { Todo } from './Todo.model';

const TodoListOld = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoListOld;

/**
 * Problems with the code;
 *
 * 1. Not cancelling the requests when component is unmounted
 * 2. No separation of concerns
 * 3. No retries
 * 4. No automatic refresh
 * 5. No caching
 */
