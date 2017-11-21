import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actions as notifActions } from 'redux-notifications';

import List from '../../components/list';

import { deleteState } from './actions';

const mapStateToProps = state => {
  const { states } = state || [];
  const items = states.map(item => ({
    id: item.pk,
    text: item.name,
    style: { color: item.color },
  }));
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { notifSend } = notifActions;
  return {
    onClick: pk => {
      props.history.push(`/states/edit/${pk}`);
    },
    onDelete: (pk, name) => {
      dispatch(deleteState(pk));
      dispatch(
        notifSend({
          message: `Deleted ${name}`,
          kind: 'danger',
          dismissAfter: 1000,
        })
      );
    },
    onExport: pk => {
      props.history.push(`/states/save/${pk}`);
    },
  };
};

const StateList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(List)
);

export default StateList;
