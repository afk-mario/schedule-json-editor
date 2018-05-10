import React from 'react';
import { connect } from 'react-redux';
import { clearSchedules } from './actions';
import Tasks from '../../components/tasks';
import { withRouter } from 'react-router';

function mapStateToProps(state) {
  const { schedules } = state;
  return { items: schedules };
}

let SchedulesTasks = ({ items, dispatch, history }) => {
  const tasks = [
    {
      name: 'Create schedule',
      onClick: () => {
        history.push('/schedules/schedules/add');
      },
    },
    // {
    //   name: 'Load',
    //   onClick: () => {
    //     history.push('/schedules/load');
    //   },
    // },
    // {
    //   name: 'Clear',
    //   onClick: () => {
    //     dispatch(clearSchedules());
    //   },
    // },
  ];
  return <Tasks items={tasks} />;
};

SchedulesTasks = withRouter(connect(mapStateToProps)(SchedulesTasks));
export default SchedulesTasks;
