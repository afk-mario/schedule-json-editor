import {connect} from 'react-redux';
import {editSchedule} from './actions';
import Form from './form';
import {withRouter} from 'react-router';

const mapStateToProps = (state, props) => {
  const {pk} = props.match.params;
  const {schedules, types} = state || [];
  const single = schedules.filter(item => item.pk === pk)[0] || undefined;
  if (!single) {
    props.history.push('/schedules/');
  }
  return {
    item: single,
    options: types,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: schedule => {
      dispatch(editSchedule(schedule));
      props.history.push('/schedules/');
    },
  };
};

const EditSchedule = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form),
);

export default EditSchedule;
