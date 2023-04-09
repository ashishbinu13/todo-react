export const TodoItem = ({ id, title, completed, handleCheck, deleteTodo }) => {
  return (
    <li>
      <label>
        <input
          onChange={(e) => {
            handleCheck(id, e.target.checked);
          }}
          checked={completed}
          type="checkbox"
        />
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>
    </li>
  );
};
