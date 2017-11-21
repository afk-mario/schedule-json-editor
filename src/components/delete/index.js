import React from 'react';
import './style.css';

const Delete = ({ onClick, id }) => {
  return (
    <div
      className="delete"
      onClick={e => {
        onClick(id);
      }}
    >
      <i>x</i>
    </div>
  );
};

export default Delete;
