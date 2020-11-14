import React, { useContext } from "react";
import Provider from "../Provider/Provider";
import { userContext } from "../../App";
import Client from "../Client/Client";
import { CircularProgress } from "@material-ui/core";
import useFetch from "../cutomHooks/useFetch";

export default function MainPage() {
  const { loading, users } = useFetch();
  const { user } = useContext(userContext);

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
  const filUsers = users && users.filter((c) => c.type === `${user.type}`);

  return user.type === "provider" ? (
    <Client filUsers={filUsers} />
  ) : (
    <Provider filUsers={filUsers} />
  );
}
