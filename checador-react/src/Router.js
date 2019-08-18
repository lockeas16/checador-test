import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import NotFound from "./NotFound";
import Login from "./components/Login";

const Router = ({}) => (
  <Switch>
    <Route exact path="/" render={props => <Landing {...props} />} />

    <Route path="/login" render={props => <Login {...props} />} />

    {/* <Route
      path="/dashboard"
      render={props => (
        <DashboardContainer {...props} user={user} setUser={setUser} />
      )}
    />
    <Route
      path="/employee/:id"
      render={props => <EmployeeContainer {...props} />}
    /> */}
    <Route component={NotFound} />
  </Switch>
);

export default Router;
