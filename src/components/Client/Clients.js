import React, { useContext } from "react";
import { userContext } from "../../App";
import Client from "./Client";

export default function Clients() {
  const { filUsers } = useContext(userContext);

  return <Client filUsers={filUsers} />;
}
