import React from 'react';
import { version } from '../../../package.json';
import Load from '../../components/load';

import './style.css';

let SettingsForm = ({ state, loadState, saveState }) => {
  return (
    <div className="container settings">
      <section className="dark-container">
        <div className="version-number">V:{version}</div>
        <section className="save">
          <div
            className="button blue"
            onClick={() => {
              saveState(state);
            }}
          >
            save application
          </div>
        </section>
        <Load name="load application" onLoad={loadState} />
      </section>
    </div>
  );
};

export default SettingsForm;
