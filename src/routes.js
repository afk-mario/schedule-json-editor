import React from 'react';
// import Loading from './components/loading';

import Schedules from './containers/schedules';
import AddSchedules from './containers/schedules/add';
import EditSchedules from './containers/schedules/edit';

import Types from './containers/types';
import AddTypes from './containers/types/add';
import EditTypes from './containers/types/edit';

import Json from './containers/json';
import Settings from './containers/settings';

import {Redirect} from 'react-router-dom';

const routes = [
  {
    path: '/',
    component: () => <Redirect from="/" to="/schedules" />,
    exact: true,
  },
  {
    path: '/schedules',
    name: 'Schedules',
    component: Schedules,
    routes: [
      {
        path: '/schedules/add',
        component: AddSchedules,
        exact: true,
      },
      {
        path: '/schedules/edit/:pk',
        component: EditSchedules,
        exact: true,
      },
    ],
  },
  {
    path: '/types',
    name: 'Types',
    component: Types,
    routes: [
      {
        path: '/types/add',
        component: AddTypes,
        exact: true,
      },
      {
        path: '/types/edit/:pk',
        component: EditTypes,
        exact: true,
      },
    ],
  },
  {
    path: '/json',
    name: 'Json',
    exact: true,
    component: Json,
  },
  {
    path: '/settings',
    name: 'Settings',
    exact: true,
    component: Settings,
  },
];

export default routes;
