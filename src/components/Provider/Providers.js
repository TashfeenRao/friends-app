import React, { useContext } from "react";
import { userContext } from "../../App";
import Provider from "./Provider";

export default function Providers() {
  const { filUsers } = useContext(userContext);

  return <Provider filUsers={filUsers} />;
}
