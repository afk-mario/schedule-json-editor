import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actions as notifActions } from 'redux-notifications';

import List from '../../components/list';
import { deleteSchedule } from './actions';

const mapStateToProps = state => {
  const { schedules } = state || [];
  const items = schedules.map(item => ({
    id: item.pk,
    text: item.name,
  }));
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  const { notifSend } = notifActions;
  return {
    onClick: pk => {
      props.history.push(`/schedules/edit/${pk}`);
    },
    onDelete: (pk, name) => {
      dispatch(deleteSchedule(pk));
      dispatch(
        notifSend({
          message: `Deleted ${name}`,
          kind: 'danger',
          dismissAfter: 1000,
        })
      );
    },
    onExport: pk => {
      props.history.push(`/schedules/save/${pk}`);
    },
  };
};

const ScheduleList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(List)
);

export default ScheduleList;
