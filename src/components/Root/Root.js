import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Client from "../Client/Client";
import Provider from "../Provider/Provider";

export default function Root() {
  return (
      <Switch>
        <Route exact path="/client" component={Client} />
        <Route exact path="/provider" component={Provider} />
        <Redirect to="/" />
      </Switch>
  );
}
