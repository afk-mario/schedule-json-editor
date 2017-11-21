import React from 'react';
import {version} from '../../../package.json';
import './style.css';
import Dropzone from 'react-dropzone';

let SettingsForm = ({loadState}) => {
  return (
    <div className="container settings">
      <section className="dark-container">
        <section className="load">
          <Dropzone
            name="elements"
            className="drop"
            activeClassName="active-drop"
            acceptClassName="accept-drop"
            rejectClassName="reject-drop"
            disabledClassName="disabled-drop"
            onDrop={loadState}>
            LOAD
          </Dropzone>
        </section>
        <div className="version-number">V:{version}</div>
      </section>
    </div>
  );
};

export default SettingsForm;
