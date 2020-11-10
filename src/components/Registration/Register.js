import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import toastError from "../toast/toastError";
import Axios from "axios";
import { CircularProgress } from "@material-ui/core";

export default function Register({ setUser }) {
  const [active, setActive] = useState(true);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (user) => {
    localStorage.setItem(user.email, JSON.stringify(user));
    setUser(user);
  };
  const handleSignin = (u) => {
    const data = { identifier: u.email, password: u.password };
    const config = {
      method: "post",
      url: "http://localhost:1337/auth/local",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    setLoading(true);
    Axios(config)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("token", response.data.jwt);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setLoading(false);
      })
      .catch((error) => {
        toastError("invalid email / password");
        setLoading(false);
      });
  };
  return (
    <>
      {loading ? (
        <CircularProgress
          color="secondary"
          size={100}
          style={{
            position: "absolute",
            top: "50%",
            left: "45%",
          }}
        />
      ) : active ? (
        <Login setActive={setActive} handleSignin={handleSignin} />
      ) : (
        <SignUp setActive={setActive} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
