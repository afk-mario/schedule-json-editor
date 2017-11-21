import {connect} from 'react-redux';
import {addType} from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const item = Object.assign(
    {},
    ...spec.map(({name, value}) => ({[name]: value})),
  );

  return {
    item,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: element => {
      dispatch(addType(element));
    },
  };
};

const AddType = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddType;
