import React from 'react';

import Schedules from './containers/schedules';
import AddSchedules from './containers/schedules/add';
import EditSchedules from './containers/schedules/edit';
import SaveSchedules from './containers/schedules/save';
import LoadSchedules from './containers/schedules/load';

import Types from './containers/types';
import AddTypes from './containers/types/add';
import EditTypes from './containers/types/edit';
import SaveTypes from './containers/types/save';
import LoadTypes from './containers/types/load';

import Json from './containers/json';
import Settings from './containers/settings';

import { Redirect } from 'react-router-dom';

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
        path: '/schedules/load',
        component: LoadSchedules,
        exact: true,
      },
      {
        path: '/schedules/edit/:pk',
        component: EditSchedules,
        exact: true,
      },
      {
        path: '/schedules/save/:pk',
        component: SaveSchedules,
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
      {
        path: '/types/save/:pk',
        component: SaveTypes,
        exact: true,
      },
      {
        path: '/types/load',
        component: LoadTypes,
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
