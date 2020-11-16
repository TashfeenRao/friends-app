import React, { useContext, useEffect, useState } from "react";
import Provider from "../Provider/Provider";
import Client from "../Client/Client";
import { CircularProgress } from "@material-ui/core";
import Axios from "axios";
import toastError from "../toast/toastError";
import { Redirect, Route, Switch } from "react-router-dom";
import Clients from "../Client/Clients";
import ClientProfile from "../profile/ClientProfile";
import ProviderProfile from "../profile/ProviderProfile";
import UserProfile from "../profile/UserProfile";
import Providers from "../Provider/Providers";
import MainPage from "./MainPage";
import { userContext } from "../../App";

export default function Root() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const { user } = useContext(userContext);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://friends-app-strapi.herokuapp.com/users",
      headers: {
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    const unsubcribe = Axios(config)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toastError("could not able to find users");
        setLoading(false);
      });
    return unsubcribe;
  }, []);

  if (loading)
    return (
      <CircularProgress
        color="secondary"
        size={100}
        style={{
          position: "absolute",
          top: "50%",
          left: "45%",
        }}
      />
    );
  const filUsers =
    users && users.filter((c) => c.type !== `${user.type}` && c.id !== user.id);
  return (
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/client/:profile" component={ClientProfile} />
      <Route exact path="/client" component={Client} />
      <Route exact path="/provider" component={Provider} />
      <Route exact path="/provider/:profile" component={ProviderProfile} />
      <Route exact path="/user/:id" component={UserProfile} />
      <Route
        exact
        path="/providers"
        component={() => <Providers filUsers={filUsers} />}
      />
      <Route
        exact
        path="/clients"
        component={() => <Clients filUsers={filUsers} />}
      />
      <Redirect to="/" />
    </Switch>
  );
}
