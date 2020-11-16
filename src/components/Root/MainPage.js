import React, { useContext, useEffect, useState } from "react";
import Provider from "../Provider/Provider";
import { userContext } from "../../App";
import Client from "../Client/Client";
import { CircularProgress } from "@material-ui/core";
import useFetch from "../cutomHooks/useFetch";
import Axios from "axios";
import toastError from "../toast/toastError";
import { Redirect } from "react-router-dom";

export default function MainPage() {
  const { user } = useContext(userContext);

  return user.type === "provider" ? (
    <Redirect to="clients" />
  ) : (
    <Redirect to="providers" />
  );
}
