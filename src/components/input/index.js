import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = props => {
  const {id, name, label, type, value} = props;

  const className = classNames({
    [`input-${type}`]: true,
    input: true,
  });

  const selector = id || name;

  if (type === 'checkbox') {
    return (
      <div className={className}>
        <label htmlFor={selector}>
          <span>{label ? label : name}</span>
          {value ? (
            <i className="material-icons">check_box</i>
          ) : (
            <i className="material-icons">check_box_outline_blank</i>
          )}
        </label>
        <input id={selector} name={name} checked={value} {...props} value="" />
      </div>
    );
  }

  return (
    <div className={className}>
      <label htmlFor={selector}>{label ? label : name}</label>
      <input id={selector} name={name} {...props} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
