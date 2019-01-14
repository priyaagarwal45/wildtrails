import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard';
import LandingPage from './dashboard/LandingPage';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/'  component={Dashboard} />
      <Route path='/dashboard'  component={Dashboard} />
      <Route path='/landing'  component={LandingPage} />
    </Switch>
  </main>
)

export default Routes;
