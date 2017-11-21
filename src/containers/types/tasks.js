import React from 'react';
import {connect} from 'react-redux';
import {clearTypes} from './actions';
import {exportState} from '../../lib/export';
import Tasks from '../../components/tasks';
import {withRouter} from 'react-router';

function mapStateToProps(state) {
  const {types} = state;
  return {items: types};
}

let TypesTasks = ({items, dispatch, history}) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/types/add');
      },
    },
    {
      name: 'Export',
      onClick: () => {
        exportState({items, name: 'types'});
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
