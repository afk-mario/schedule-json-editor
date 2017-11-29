import React from 'react';
import { version } from '../../../package.json';
import Load from '../../components/load';
import Input from '../../components/input';

import './style.css';

let SettingsForm = ({ state, loadState, saveState, ip, onChangeIp }) => {
  return (
    <div className="container settings">
      <section className="dark-container">
        <div className="version-number">V:{version}</div>
        <Input
          label="Server IP"
          name="serverIP"
          type="text"
          value={ip}
          onChange={onChangeIp}
        />
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
