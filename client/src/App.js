import { CssBaseline } from '@material-ui/core';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Tracker from './components/Tracker/Tracker';

const App = () => (
  <div>
    <CssBaseline />
    <Navbar />
    <main>
      <Switch>
        <Route path={['/']} exact component={Tracker} />
        <Route path="/account" />
        <Route path="/meals" />
      </Switch>
    </main>
  </div>
);

export default App;
