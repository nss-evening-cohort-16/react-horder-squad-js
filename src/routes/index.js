import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" />
        <Route exact path="/stuff/:detail" />
        <Route exact path="/edit/ :key" />
      </Switch>
    </div>
  );
}
