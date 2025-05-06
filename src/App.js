import React, { useState } from 'react';

const Todo = ({ todo, index, completeTodo, removeTodo }) => (
  <div
    style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
    className='todo'
  >
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Remove</button>
    </div>
  </div>
);

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

const App = () => {
  const [todos, setTodos] = useState([
    { text: 'Learn React', isCompleted: false },
    { text: 'Build a React App', isCompleted: false },
    { text: 'Deploy the App', isCompleted: false }
  ]);

  const addTodo = text => setTodos([...todos, { text }]);
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
  };
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
  };

  return (
    <div className='app'>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
};

export default App;
