import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";
import { CircularProgress } from "@material-ui/core";
import { useRegister } from "../cutomHooks/useRegister";

export default function Register({ setUser }) {
  const [active, setActive] = useState(true);
  const { handleSign, loading, handleSignUp } = useRegister(setUser);

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

  return active ? (
    <Login setActive={setActive} handleSign={handleSign} />
  ) : (
    <SignUp setActive={setActive} handleSignUp={handleSignUp} />
  );
}
