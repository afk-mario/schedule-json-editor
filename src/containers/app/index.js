import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Notifs } from 'redux-notifications';

import routes from '../../routes';

import Header from '../../components/header';
import Footer from '../../components/footer';
import NoMatch from '../../components/404';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import './style.css';
import './button.css';
import './form.css';
import './notif.css';

export default history => {
  return (
    <ConnectedRouter history={history.history}>
      <div>
        <Notifs />
        <Header />
        <div className="page-child">
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </div>
    </ConnectedRouter>
  );
};
