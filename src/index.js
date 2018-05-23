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

import { Spacebrew } from './lib/sb';
import axios from "axios/index";
window.Spacebrew = Spacebrew;

const history = createHistory();
const a = routerMiddleware(history);
const middleware = [a, thunk];

let persistedState;
let store;


// load all data from DB
// axios.get(`http://192.168.86.30:3000/schedule/data`).then(res => {
axios.get(`/schedule/data`).then(res => {
  console.log("---> MONGO");

  // MONGO DB
  const schedules = JSON.parse(res.data.schedules);
  const states = JSON.parse(res.data.states);
  const settings = JSON.parse(res.data.settings);
  console.log(schedules);
  console.log(states);
  console.log(settings);

  // save loaded data into local storage
  saveState({ schedules, settings, states });


  // contine as normal
  persistedState = loadState({});

  store = createStore(
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

}).catch((e) => {
  console.log("---> ERROR LOADING CONTENT");
});
