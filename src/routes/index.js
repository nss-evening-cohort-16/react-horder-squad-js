import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ItemDetails from '../components/ItemDetails';
import Home from '../views/Home';
import StuffForm from '../components/StuffForm';

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/new" user={user}>
          <StuffForm />
        </Route>
        <Route exact path="/details/:fbKey">
          <ItemDetails />
        </Route>
        <Route exact path="/edit/ :key" />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.shape(PropTypes.obj).isRequired,
};
