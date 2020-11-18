import { useState } from "react";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "./Copywrite";
import useStyles from "../cutomHooks/UseStyles";
import {
  Checkbox,
  FormControlLabel,
  Container,
  Typography,
  Box,
  Grid,
  Link,
  TextField,
  CssBaseline,
  Button,
  Avatar,
} from "@material-ui/core";

export default function SignUp({ setActive, handleSignUp }) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(false);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={(e) => {
            e.preventDefault();
            handleSignUp({
              username,
              email,
              password,
              type: role ? "provider" : "client",
            });
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                autoComplete="username"
                name="userName"
                variant="outlined"
                onChange={(e) => setUsername(e.target.value)}
                required
                fullWidth
                id="firsName"
                label="User Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value="client"
                control={
                  <Checkbox
                    checked={!role}
                    color="primary"
                    onChange={(e) => setRole(!role)}
                  />
                }
                label="client"
                labelPlacement="start"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControlLabel
                value="provider"
                control={
                  <Checkbox
                    checked={role}
                    color="primary"
                    onChange={(e) => setRole(!role)}
                  />
                }
                label="provider"
                labelPlacement="start"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                component="button"
                onClick={() => setActive(true)}
                variant="body2"
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
