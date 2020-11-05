import { useState } from "react";
import Login from "./Login";
import SignUp from "./Signup";

export default function Register() {
  const [active, setActive] = useState(true);
  const handleSubmit = (user) => {
  localStorage.setItem(
    user.email, JSON.stringify(user)
  );
  }
  return (
    <>
      {active ? (
        <Login setActive={setActive} />
      ) : (
        <SignUp setActive={setActive} handleSubmit={handleSubmit} />
      )}
    </>
  );
}
