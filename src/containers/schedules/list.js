import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { actions as notifActions } from 'redux-notifications';

import List from '../../components/list';
import { deleteSchedule } from './actions';
import { Spacebrew } from '../../lib/sb';

const mapStateToProps = state => {
  const { schedules } = state || [];
  const { serverIp } = state.settings || '';
  const items = schedules.map(item => ({
    id: item.pk,
    text: item.name,
  }));
  return {
    items,
    schedules,
    serverIp,
  };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { notifSend } = notifActions;
  const { dispatch } = dispatchProps;
  const { schedules } = stateProps;
  const { serverIp } = stateProps || 'localhost';
  // TODO: Move this to a global variable instead of a component
  const sb = new Spacebrew.Client(
    serverIp,
    'schedule-json-editor',
    'A React schedule editor'
  );

  sb.connect();

  return {
    ...stateProps,
    ...ownProps,
    onClick: pk => {
      ownProps.history.push(`/schedules/edit/${pk}`);
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
    onSend: pk => {
      const schedule = schedules.find(item => item.pk === pk);
      const jsonItem = JSON.stringify(schedule);
      console.log(sb);
      console.log(jsonItem);
      try {
        sb.send(schedule.name, 'string', jsonItem);
      } catch (e) {
        console.log(e);
      }
    },
    onExport: pk => {
      ownProps.history.push(`/schedules/save/${pk}`);
    },
  };
};

const ScheduleList = withRouter(
  connect(mapStateToProps, null, mergeProps)(List)
);

export default ScheduleList;
