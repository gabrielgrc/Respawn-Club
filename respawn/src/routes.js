import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
