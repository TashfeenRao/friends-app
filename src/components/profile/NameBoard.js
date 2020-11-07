import { Grid, Typography } from '@material-ui/core';
import React, { useContext } from 'react'
import {userContext} from '../../App';

export default function NameBoard() {
const { user } = useContext(userContext);
const { fname, lname, email, role} = user;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="h6">Fname:</Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">{fname}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="h6">Lname:</Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">{lname}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="h6">Email:</Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">{email}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={1}>
            <Typography variant="h6">Role:</Typography>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="h5">{role ? 'provider' : 'client'}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
