import React, { ReactElement } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from 'pages';

const IndexRouter: React.FC = (): ReactElement => (
  <Router>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);

export default IndexRouter;
