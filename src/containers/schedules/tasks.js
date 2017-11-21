import React from 'react';
import {connect} from 'react-redux';
import {clearSchedules} from './actions';
import {exportState} from '../../lib/export';
import Tasks from '../../components/tasks';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
  const {schedules} = state;
  return {items: schedules};
}

let SchedulesTasks = ({items, dispatch, history}) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/schedules/add');
      },
    },
    {
      name: 'Export',
      onClick: () => {
        exportState({items, name: 'schedules'});
      },
    },
    {
      name: 'Clear',
      onClick: () => {
        dispatch(clearSchedules());
      },
    },
  ];
  return <Tasks items={tasks} />;
};

SchedulesTasks = withRouter(connect(mapStateToProps)(SchedulesTasks));
export default SchedulesTasks;
