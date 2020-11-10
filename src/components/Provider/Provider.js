import { CircularProgress, Grid } from "@material-ui/core";
import Axios from "axios";
import { useEffect, useState } from "react";
import toastError from "../toast/toastError";
import AppBarComp from "./AppBar";
import CardComp from "./CardComp";

export default function Provider() {
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
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={12}>
        <AppBarComp />
      </Grid>
      <Grid item xs={12}>
        <h1>All Providers</h1>
      </Grid>
      {users &&
        users.map((user) => (
          <Grid key={user.id} item xs={12} sm={4}>
            <CardComp
              username={user.username}
              email={user.email}
              id={user.id}
            />
          </Grid>
        ))}
    </Grid>
  );
}
