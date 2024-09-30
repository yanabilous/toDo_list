import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title);
      setTitle('');
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form__input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введіть завдання"
      />
      <button className="todo-form__button" type="submit">
        Додати
      </button>
    </form>
  );
};

export default TodoForm;
