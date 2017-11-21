import { connect } from 'react-redux';
import { addState } from './actions';
import Load from '../../components/load';

const mapStateToProps = state => {
  return {
    name: 'Load \nState',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoad: files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileAsBinaryString = reader.result;
          try {
            const savedState = JSON.parse(fileAsBinaryString);
            dispatch(addState(savedState));
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

const LoadStates = connect(mapStateToProps, mapDispatchToProps)(Load);

export default LoadStates;
