import { connect } from 'react-redux';
import { actions as notifActions } from 'redux-notifications';

import { addSchedule } from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const { states } = state || [];
  const item = Object.assign(
    {},
    ...spec.map(({ name, value }) => ({ [name]: value }))
  );

  return {
    item,
    options: states,
  };
};

const mapDispatchToProps = dispatch => {
  const { notifSend } = notifActions;

  return {
    onSubmit: item => {
      dispatch(addSchedule(item));
      dispatch(
        notifSend({
          message: `Created ${item.name}`,
          kind: 'success',
          dismissAfter: 1000,
        })
      );
    },
  };
};

const AddSchedule = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddSchedule;
