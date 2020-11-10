import React, { useContext } from "react";
import Provider from "../Provider/Provider";
import { userContext } from "../../App";
import Client from "../Client/Client";

export default function MainPage() {
  const { user } = useContext(userContext);
  const { role } = user;
  return role.name === "provider" ? <Provider /> : <Client />;
}
