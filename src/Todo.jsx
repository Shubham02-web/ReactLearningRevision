const Todo = (props) => {
  return (
    <div>
      <h1>{props.todo.title}</h1>
      <p>{props.todo.description}</p>
    </div>
  );
};

export default Todo;
