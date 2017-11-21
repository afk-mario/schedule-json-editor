import React from 'react';

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import List from './list';
import Tasks from './tasks';
import './style.css';

export default ({routes}) => (
  <section className="schedules">
    <section className="side-static">
      <List />
      <Tasks />
    </section>
    <section className="child">
      <div className="container">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </section>
  </section>
);
