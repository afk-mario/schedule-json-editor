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
  const { schedules, serverIp } = stateProps;
  const sb = new Spacebrew.Client({ reconnect: true });
  sb.server = serverIp;
  sb.port = 9000;
  sb.name = 'Schedule editor';

  // add pubishers
  sb.addPublish('OnScheduleUpdateWithJsonString', 'string');

  // callbacks
  sb.onOpen = onOpen;

  // check when spacebrew is open
  function onOpen() {
    console.log('Spacebrew has opened : ' + sb.name);
  }

  // connect spacebrew
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
        sb.send('OnScheduleUpdateWithJsonString', 'string', 'raw|' + jsonItem);
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
