import { Container } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import toastError from "../toast/toastError";
import { baseUrl, config } from "./Config";

export default function Data() {
  const [invitations, setInvitations] = useState(null);

  useEffect(() => {
    const newConfig = {
      ...config,
      url: `${baseUrl}invitations`,
      method: "get",
    };
    Axios(newConfig)
      .then((response) => {
        setInvitations(JSON.stringify(response.data));
      })
      .catch((error) => {
        toastError("could nout find invitations");
      });
  }, []);
  return (
    <Container maxWidth="large">
      <h3>{invitations}</h3>;
    </Container>
  );
}
