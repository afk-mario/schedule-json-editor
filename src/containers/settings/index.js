import {connect} from 'react-redux';
import {loadSchedules} from '../schedules/actions';
import Form from './form';
import './style.css';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loadState: files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileAsBinaryString = reader.result;
          try {
            const savedState = JSON.parse(fileAsBinaryString);
            dispatch(loadSchedules(savedState.schedules));
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
