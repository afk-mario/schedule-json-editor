import { combineReducers } from 'redux';
import { reducer as notifReducer } from 'redux-notifications';
import { routerReducer } from 'react-router-redux';

import schedules from './containers/schedules/reducers';
import states from './containers/states/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  schedules,
  states,
  settings,
  notifs: notifReducer,
  router: routerReducer,
});

export default app;
