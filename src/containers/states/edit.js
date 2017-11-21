import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { editState } from './actions';
import Form from './form';

const mapStateToProps = (state, props) => {
  const { pk } = props.match.params;
  const { states } = state || [];
  const item = states.filter(item => item.pk === pk)[0] || undefined;
  if (!item) {
    props.history.push('/states/');
  }
  return {
    item,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: item => {
      dispatch(editState(item));
      // props.history.push('/states/');
    },
  };
};

const EditState = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form)
);

export default EditState;
