import { connect } from 'react-redux';
import { actions as notifActions } from 'redux-notifications';

import { addState } from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const item = Object.assign(
    {},
    ...spec.map(({ name, value }) => ({ [name]: value }))
  );

  return {
    item,
  };
};

const mapDispatchToProps = dispatch => {
  const { notifSend } = notifActions;
  return {
    onSubmit: item => {
      dispatch(addState(item));
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

const AddState = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddState;
