import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, handleCheck, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}
      {todos.map((todo) => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            handleCheck={handleCheck}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
};
