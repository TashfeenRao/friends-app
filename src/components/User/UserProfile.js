import { CircularProgress, Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import toastError from "../toast/toastError";
import UserDisplay from "../User/UserDisplay";
import UserNameBoard from "../User/UserNameBoard";

export default function UserProfile() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: `https://friends-app-strapi.herokuapp.com/users/${id}`,
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
  }, [id]);

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
    <Grid container spacing={6}>
      <Grid item xs={12} sm={2}>
        <UserDisplay
          user={user && user}
        />
      </Grid>
      <Grid item xs={12} sm={10}>
        <UserNameBoard user={user && user} />
      </Grid>
    </Grid>
  );
}
