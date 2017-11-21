import React from 'react';
import {findDOMNode} from 'react-dom';
import {DragSource, DropTarget} from 'react-dnd';
import PropTypes from 'prop-types';

import Delete from '../delete';
import Input from '../../components/input';
import Select from 'react-select';

import {flow} from 'lodash';

import './style.css';

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index,
    };
  },
};

const cardTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index;
    const hoverIndex = props.index;

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return;
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

    // Determine mouse position
    const clientOffset = monitor.getClientOffset();

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top;

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return;
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return;
    }

    // Time to actually perform the action
    props.moveRow(dragIndex, hoverIndex);

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex;
  },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

function idk(connect) {
  return {
    connectDropTarget: connect.dropTarget(),
  };
}

const ExtraFieldRow = props => {
  const {
    id,
    index,
    item,
    onChange,
    options,
    spec,
    onDelete,
    color,
    isDragging,
    connectDragSource,
    connectDropTarget,
  } = props;

  const style = {
    borderColor: color,
    opacity: isDragging ? 0.5 : 1,
  };

  return connectDropTarget(
    connectDragSource(
      <div className="extra-field-row" style={style}>
        <div className="fieldset" id={id}>
          <Select
            name="type"
            options={options}
            labelKey="name"
            valueKey="name"
            value={item.type}
            clearable={false}
            onChange={option => {
              onChange(index, {...item, type: option.name});
            }}
            required
          />
          {spec.map(
            (field, i) =>
              field.hide ? (
                ''
              ) : (
                <Input
                  {...field}
                  key={i}
                  id={`${field.name}-${index}`}
                  value={item[field.name]}
                  onChange={e => {
                    const {target} = e;
                    const value =
                      target.type === 'checkbox'
                        ? target.checked
                        : target.value;
                    onChange(index, {...item, [field.name]: value});
                  }}
                />
              ),
          )}
          <Delete id={index} onClick={onDelete} />
        </div>
      </div>,
    ),
  );
};

ExtraFieldRow.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  moveRow: PropTypes.func.isRequired,
  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
};

export default flow(
  DragSource('CARD', cardSource, collect),
  DropTarget('CARD', cardTarget, idk),
)(ExtraFieldRow);
