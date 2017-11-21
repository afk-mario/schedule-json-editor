import {connect} from 'react-redux';
import {addSchedule} from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const {types} = state || [];
  const item = Object.assign(
    {},
    ...spec.map(({name, value}) => ({[name]: value})),
  );

  return {
    item,
    options: types,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: element => {
      dispatch(addSchedule(element));
    },
  };
};

const AddSchedule = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddSchedule;
