import React from "react";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Client from "../Client/Client";
import ClientProfile from "../profile/ClientProfile";
import ProviderProfile from "../profile/ProviderProfile";
import Provider from "../Provider/Provider";
import MainPage from "./MainPage";

export default function Root() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/client/:profile" component={ClientProfile} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/provider" component={Provider} />
      <Route exact path="/provider/:profile" component={ProviderProfile} />
      <Redirect to="/" />
    </Switch>
  );
}
