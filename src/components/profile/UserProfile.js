import { AppBar, CircularProgress, Container, Grid } from "@material-ui/core";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import AppBarComp from "../Provider/AppBar";
import toastError from "../toast/toastError";
import UserDisplay from "./UserDisplay";
import UserNameBoard from "./UserNameBoard";

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
    <>
      <AppBarComp />
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={2}>
            <UserDisplay
              image={user && user.image}
              username={user && user.username[0].toUpperCase()}
            />
          </Grid>
          <Grid item xs={12} sm={10}>
            <UserNameBoard
              username={user && user.username}
              type={user && user.type}
              description={user && user.description}
              email={user && user.email}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
