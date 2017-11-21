import React from 'react';
import PropTypes from 'prop-types';
import Row from '../row';
import Delete from '../delete';
import Export from '../export';

import './style.css';

const List = ({ items, onClick, onDelete, onExport }) => {
  if (items.length < 1)
    return (
      <ul className="list">
        <Row text="-- No Items --" />
      </ul>
    );
  return (
    <ul className="list">
      {items.map((item, index) => (
        <Row key={item.id} {...item} onClick={() => onClick(item.id)}>
          {onExport && <Export id={item.id} onClick={onExport} />}
          {onDelete && (
            <Delete id={item.id} onClick={onDelete} name={item.text} />
          )}
        </Row>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onExport: PropTypes.func,
};

export default List;
