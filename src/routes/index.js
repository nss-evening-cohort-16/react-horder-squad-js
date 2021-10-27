import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemDetails from '../components/ItemDetails';
import Home from '../views/Home';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" />
        <Route exact path="/details/:fbKey">
          <ItemDetails />
        </Route>
        <Route exact path="/edit/ :key" />
      </Switch>
    </div>
  );
}
