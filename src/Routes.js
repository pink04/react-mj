import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const Routes = () => {
  const routeList = [
    { label: 'home', link: '/', component: Home },
    { label: 'notfound', link: '*', component: NotFound },
  ];
  return (
    <Switch>
      {routeList.map((route) => (
        <Route
          key={route.label}
          exact
          path={route.link}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;
