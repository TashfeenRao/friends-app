import React, { useContext, useEffect, useState } from "react";
import Provider from "../Provider/Provider";
import { userContext } from "../../App";
import Client from "../Client/Client";
import { CircularProgress } from "@material-ui/core";
import useFetch from "../cutomHooks/useFetch";
import Axios from "axios";
import toastError from "../toast/toastError";

export default function MainPage() {
  const { user } = useContext(userContext);

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

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

  return user.type === "provider" ? (
    <Client filUsers={filUsers} />
  ) : (
    <Provider filUsers={filUsers} />
  );
}
