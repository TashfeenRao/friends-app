import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Provider from "../Provider/Provider";
import { userContext } from "../../App";
import Client from "../Client/Client";

export default function MainPage() {
  const { user } = useContext(userContext);
  const { role } = user;
  return role ? <Provider /> : <Client />;
}
