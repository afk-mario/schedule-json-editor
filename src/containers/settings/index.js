import { connect } from 'react-redux';
import { exportState } from '../../lib/export';
import { loadSchedules } from '../schedules/actions';
import { loadStates } from '../states/actions';
import Form from './form';
import './style.css';

const mapStateToProps = state => {
  return { state };
};

const mapDispatchToProps = (dispatch, state) => {
  return {
    saveState: state => {
      exportState({ items: state, fileName: 'schedule-json-editor' });
    },
    loadState: files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileAsBinaryString = reader.result;
          try {
            const savedState = JSON.parse(fileAsBinaryString);
            const { schedules, states } = savedState || [];

            dispatch(loadSchedules(schedules));
            dispatch(loadStates(states));
          } catch (err) {
            console.log(fileAsBinaryString);
            console.log(err);
          }
        };

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.readAsBinaryString(file);
      });
    },
  };
};

const Settings = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Settings;
