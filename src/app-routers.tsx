import React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import Auth from "./layouts/Auth.jsx"
import User from "./layouts/User.jsx"

import "assets/css/material-dashboard-pro-react.css";
import { ROUTE_PATH } from "utils/constants";

const hist = createBrowserHistory();

const Routes = () => (
  <div className="view-routes">
    <Router history={hist}>
      <Switch>
        <Route path={ROUTE_PATH.AUTH} component={Auth} />
        <Route path={ROUTE_PATH.USER} component={User} />
        <Redirect from="/" to="/u" />
      </Switch>
    </Router>
  </div>
);

export default Routes;
