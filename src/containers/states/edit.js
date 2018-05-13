import { connect } from 'react-redux';
import { actions as notifActions } from 'redux-notifications';

import { withRouter } from 'react-router';
import { editState } from './actions';
import Form from './form';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { states } = state || [];
  const item = states.filter(item => item.pk === pk)[0] || undefined;
  /* if (!item) { */
  /*   props.history.push('/states/'); */
  /* */
  return {
    item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { notifSend } = notifActions;
  return {
    onSubmit: item => {
      dispatch(editState(item));
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

const EditState = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form)
);

export default EditState;
