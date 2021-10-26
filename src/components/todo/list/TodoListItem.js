import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={() => handleToggle(todo.id, todo.done)} className = { todo.done ? 'complete' : '' }>
        {index + 1}. {todo.desc}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
