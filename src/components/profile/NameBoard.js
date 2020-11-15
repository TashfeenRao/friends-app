import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "../cutomHooks/UseStyles";
import FormDialog from "./FormDialog";
import Axios from "axios";
import toastError from "../toast/toastError";
import toastSuccess from "../toast/toastSuccess";
import DescriptionComp from "./DescriptionComp";

export default function NameBoard() {
  const user = JSON.parse(localStorage.getItem("user"));
  const { username, description, email, type } = user;
  const classes = useStyles();
  const [input, setInput] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setOpen(false);
    setLoading(true);

    var config = {
      method: "put",
      url: `https://friends-app-strapi.herokuapp.com/users/${user.id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: { description: input },
    };

    Axios(config)
      .then(function (response) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            description: response.data.description,
          }),
        );
        toastSuccess("Added Your Description");
        setLoading(false);
      })
      .catch(function (error) {
        toastError("could not update please try again");
        setLoading(false);
      });
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Username:</Typography>
            {username}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DescriptionComp
            setOpen={setOpen}
            loading={loading}
            description={description}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Email:</Typography>
            {email}
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6">Role:</Typography>
            {type === "provider" ? "provider" : "client"}
          </Paper>
        </Grid>
      </Grid>
      <FormDialog
        open={open}
        setOpen={setOpen}
        setInput={setInput}
        handleEdit={handleEdit}
      />
    </>
  );
}
