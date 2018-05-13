import React from 'react';
import './style.css';

const Duplicate = ({ onClick, id }) => {
  return (
    <div
      className="duplicate"
      onClick={e => {
        onClick(id);
      }}
    >
      <i className="material-icons"> file_copy </i>
    </div>
  );
};

export default Duplicate;
