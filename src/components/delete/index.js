import React from 'react';
import './style.css';

const Delete = ({ onClick, id, name }) => {
  return (
    <div
      className="delete"
      onClick={e => {
        onClick(id, name);
      }}
    >
      <i>x</i>
    </div>
  );
};

export default Delete;
