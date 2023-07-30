import useTodos from './useTodos';

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((todo) => (
        <li key={todo.id} className="list-group-item">
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

/**
 * Benefits of this code;
 *
 * 1. Auto retries
 * 2. Auto refresh
 * 3. Caching
 *
 * Problems in this code;
 * 1. No separation of concerns: Make a custom hook (useTodos)
 */
