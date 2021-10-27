import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ItemDetails from '../components/ItemDetails';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/new" />
        <Route exact path="/stuff/:detail">
          <ItemDetails />
        </Route>
        <Route exact path="/edit/ :key" />
      </Switch>
    </div>
  );
}
