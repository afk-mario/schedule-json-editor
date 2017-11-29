import React from 'react';
import './style.css';

const Send = ({ onClick, id, name }) => {
  return (
    <div
      className="send"
      onClick={e => {
        onClick(id, name);
      }}
    >
      <i className="material-icons">send</i>
    </div>
  );
};

export default Send;
