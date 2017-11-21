import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { throttle } from 'lodash';

import AppReducer from './reducers';

import App from './containers/app';
import { loadState, saveState } from './lib/localStorage';
import registerServiceWorker from './registerServiceWorker';

import 'react-select/dist/react-select.css';

const persistedState = loadState();
const store = createStore(
  AppReducer,
  persistedState,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
