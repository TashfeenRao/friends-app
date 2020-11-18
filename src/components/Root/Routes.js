import { Switch, Redirect, Route } from "react-router-dom";
import Client from "../Client/Client";
import ClientProfile from "../Client/ClientProfile";
import Clients from "../Client/Clients";
import Provider from "../Provider/Provider";
import ProviderProfile from "../Provider/ProviderProfile";
import Providers from "../Provider/Providers";
import User from "../User/User";
import MainPage from "./MainPage";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/client/:profile" component={ClientProfile} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/provider" component={Provider} />
      <Route exact path="/provider/:profile" component={ProviderProfile} />
      <Route exact path="/user/:id" component={User} />
      <Route exact path="/providers" component={Providers} />
      <Route exact path="/clients" component={Clients} />
      <Redirect to="/" />
    </Switch>
  );
}
