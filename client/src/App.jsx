import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Account from './components/Account/Account';
import Auth from './components/Auth/Auth';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import Tracker from './components/Tracker/Tracker';

const App = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <main>
      <Switch>
        <Route path={['/', 'tracker']} exact component={Tracker} />
        <Route path="/account" component={Account} />
        <Route path="/meals" component={Meals} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </main>
  </div>
);

export default App;
