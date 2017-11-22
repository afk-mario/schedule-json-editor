import React from 'react';

import NoMatch from './components/404';

import Schedules from './containers/schedules';
import AddSchedules from './containers/schedules/add';
import EditSchedules from './containers/schedules/edit';
import SaveSchedules from './containers/schedules/save';
import LoadSchedules from './containers/schedules/load';

import States from './containers/states';
import AddStates from './containers/states/add';
import EditStates from './containers/states/edit';
import SaveStates from './containers/states/save';
import LoadStates from './containers/states/load';

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
    path: '/states',
    name: 'States',
    component: States,
    routes: [
      {
        path: '/states/add',
        component: AddStates,
        exact: true,
      },
      {
        path: '/states/edit/:pk',
        component: EditStates,
        exact: true,
      },
      {
        path: '/states/save/:pk',
        component: SaveStates,
        exact: true,
      },
      {
        path: '/states/load',
        component: LoadStates,
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
  {
    path: '/404',
    exact: false,
    component: NoMatch,
  },
];

export default routes;
