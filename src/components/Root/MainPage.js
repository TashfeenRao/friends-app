import React, { useContext, useEffect, useState } from "react";
import Provider from "../Provider/Provider";
import { userContext } from "../../App";
import Client from "../Client/Client";
import { CircularProgress } from "@material-ui/core";
import toastError from "../toast/toastError";
import Axios from "axios";

export default function MainPage() {
  const { user } = useContext(userContext);
  const { role } = user;
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: "http://localhost:1337/users",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    setLoading(true);
    Axios(config)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toastError("could not able to find users");
        setLoading(false);
      });
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
  const filUsers = users && users.filter((c) => c.role.name === `${role.name}`);
  return role.name === "provider" ? (
    <Provider filUsers={filUsers} />
  ) : (
    <Client filUsers={filUsers} />
  );
}
