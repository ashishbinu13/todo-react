import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./components/NewTodoForm";
import { TodoList } from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("TODOS");
    if (!savedTodos) return [];
    return JSON.parse(savedTodos);
  });

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: title, completed: false },
      ];
    });
  };

  const handleCheck = (id, checked) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: checked,
          };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    <>
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List </h1>
      <TodoList
        todos={todos}
        handleCheck={handleCheck}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
