import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Tasks from '../../components/tasks';

import { clearStates } from './actions';

function mapStateToProps(state) {
  const { states } = state;
  return { items: states };
}

let StatesTasks = ({ items, dispatch, history }) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/schedules/states/add');
      },
    },
    {
      name: 'Load',
      onClick: () => {
        history.push('/schedules/states/load');
      },
    },
    {
      name: 'Clear',
      onClick: () => {
        dispatch(clearStates());
      },
    },
  ];
  return <Tasks items={tasks} />;
};

StatesTasks = withRouter(connect(mapStateToProps)(StatesTasks));
export default StatesTasks;
