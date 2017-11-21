import React from 'react';
import './style.css';

const Export = ({ onClick, id }) => {
  return (
    <div
      className="export"
      onClick={e => {
        onClick(id);
      }}
    >
      <i className="material-icons">save</i>
    </div>
  );
};

export default Export;
