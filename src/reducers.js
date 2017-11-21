import { combineReducers } from 'redux';
import schedules from './containers/schedules/reducers';
import states from './containers/states/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  schedules,
  states,
  settings,
});

export default app;
