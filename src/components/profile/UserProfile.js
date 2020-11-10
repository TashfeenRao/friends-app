import { CircularProgress, Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import toastError from "../toast/toastError";

export default function UserProfile() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: `http://localhost:1337/users/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    setLoading(true);
    Axios(config)
      .then((response) => {
        setUser(response.data);
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
  return (
    <Grid container>
      <Grid item>
        {" "}
        hello from user profile of user: {user && user.username}{" "}
      </Grid>
    </Grid>
  );
}
