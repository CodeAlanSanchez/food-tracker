import { CssBaseline } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
// import { getLogs } from './actions/logActions';
import { getMeals } from './actions/mealActions';
import { getTime } from './actions/timeActions';
import Account from './components/Account/Account';
import Auth from './components/Auth/Auth';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import Tracker from './components/Tracker/Tracker';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
    dispatch(getTime());
    // dispatch(getLogs());
  }, [dispatch]);

  return (
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
};

export default App;
