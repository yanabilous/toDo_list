import React from 'react';

const TodoFilter = ({ setFilter, setSortBy }) => {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="todo-filter">
      <div className="todo-filter__group">
        <label htmlFor="filter" className="todo-filter__label">Фільтрувати:</label>
        <select id="filter" className="todo-filter__select" onChange={handleFilterChange}>
          <option value="all">Усі</option>
          <option value="active">Невиконані</option>
          <option value="completed">Виконані</option>
        </select>
      </div>
      <div className="todo-filter__group">
        <label htmlFor="sort" className="todo-filter__label">Сортувати:</label>
        <select id="sort" className="todo-filter__select" onChange={handleSortChange}>
          <option value="createdAt">За датою створення</option>
          <option value="status">За статусом</option>
        </select>
      </div>
    </div>
  );
};

export default TodoFilter;
