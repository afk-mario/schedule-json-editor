import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';

import thunk from 'redux-thunk';
import { throttle } from 'lodash';

import AppReducer from './reducers';

import App from './containers/app';
import { loadState, saveState } from './lib/localStorage';
import registerServiceWorker from './registerServiceWorker';

import 'react-select/dist/react-select.css';

// import {Spacebrew} from './lib/sb';
// console.log(Spacebrew);
// var sb = new Spacebrew.Client('server', 'name', 'description', 'options');

const history = createHistory();
const a = routerMiddleware(history);
const middleware = [a, thunk];

const persistedState = loadState();
const store = createStore(
  AppReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(
  throttle(() => {
    const { schedules, states, settings } = store.getState();
    saveState({
      schedules,
      states,
      settings,
    });
  }, 1000)
);

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
