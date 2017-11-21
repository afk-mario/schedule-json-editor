import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import Tasks from '../../components/tasks';

import { clearTypes } from './actions';

function mapStateToProps(state) {
  const { types } = state;
  return { items: types };
}

let TypesTasks = ({ items, dispatch, history }) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/types/add');
      },
    },
    {
      name: 'Load',
      onClick: () => {
        history.push('/types/load');
      },
    },
    {
      name: 'Clear',
      onClick: () => {
        dispatch(clearTypes());
      },
    },
  ];
  return <Tasks items={tasks} />;
};

TypesTasks = withRouter(connect(mapStateToProps)(TypesTasks));
export default TypesTasks;
