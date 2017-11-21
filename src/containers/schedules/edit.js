import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actions as notifActions } from 'redux-notifications';

import { editSchedule } from './actions';
import Form from './form';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { schedules, states } = state || [];
  const single = schedules.filter(item => item.pk === pk)[0] || undefined;
  if (!single) {
    props.history.push('/schedules/');
  }
  return {
    item: single,
    options: states,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { notifSend } = notifActions;
  return {
    onSubmit: item => {
      dispatch(editSchedule(item));
      dispatch(
        notifSend({
          message: `Saved ${item.name}`,
          kind: 'success',
          dismissAfter: 1000,
        })
      );
    },
  };
};

const EditSchedule = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form)
);

export default EditSchedule;
