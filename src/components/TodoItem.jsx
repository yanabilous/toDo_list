import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'todo-item--completed' : ''}`}>
      <div className="todo-item__content">
        <h3 className="todo-item__title">{todo.title}</h3>
        <p className="todo-item__date">{new Date(todo.createdAt).toLocaleString()}</p>
      </div>
      <div className="todo-item__actions">
        <button
          className="todo-item__button todo-item__button--toggle"
          onClick={() => toggleTodo(todo.id)}
        >
          {todo.completed ? 'Невиконане' : 'Виконане'}
        </button>
        <button
          className="todo-item__button todo-item__button--delete"
          onClick={() => deleteTodo(todo.id)}
        >
          Видалити
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
