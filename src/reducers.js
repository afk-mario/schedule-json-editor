import {combineReducers} from 'redux';
import schedules from './containers/schedules/reducers';
import types from './containers/types/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  schedules,
  types,
  settings,
});

export default app;
