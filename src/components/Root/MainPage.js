import { userContext } from "../../App";
import { Redirect } from "react-router-dom";
import { useContext } from "react";

export default function MainPage() {
  const { user } = useContext(userContext);

  return user.type === "provider" ? (
    <Redirect to="clients" />
  ) : (
    <Redirect to="providers" />
  );
}
