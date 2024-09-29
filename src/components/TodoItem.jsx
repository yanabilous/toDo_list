import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.title}</span> <br />
      <small>{new Date(todo.createdAt).toLocaleString()}</small>
      <button onClick={() => toggleTodo(todo.id)}>
        {todo.completed ? 'Невиконане' : 'Виконане'}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
    </li>
  );
};

export default TodoItem;
