import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";

export default function Register({ setLoggedin }) {
  const [active, setActive] = useState(true);
  const handleSubmit = (user) => {
    localStorage.setItem(user.email, JSON.stringify(user));
  };
  const handleSignin = (u) => {
    const getUser = localStorage.getItem(u.email);
    const user = JSON.parse(getUser);
    user && user.password === u.password ? setLoggedin(true) : console.log("failure");
  };
  return (
    <>
      {active ? (
        <Login setActive={setActive} handleSignin={handleSignin} />
      ) : (
        <SignUp setActive={setActive} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
