import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Dropzone from 'react-dropzone';

let Load = ({ name, children, onLoad }) => {
  return (
    <section className="container load">
      <Dropzone
        name="elements"
        className="drop"
        activeClassName="active-drop"
        acceptClassName="accept-drop"
        rejectClassName="reject-drop"
        disabledClassName="disabled-drop"
        onDrop={onLoad}
      >
        {name}
      </Dropzone>
    </section>
  );
};

Load.propTypes = {
  name: PropTypes.string.isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default Load;
