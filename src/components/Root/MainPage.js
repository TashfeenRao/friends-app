import { userContext } from "../../App";
import { useContext } from "react";
import Clients from "../Client/Clients";
import Providers from "../Provider/Providers";

export default function MainPage() {
  const { user } = useContext(userContext);

  if (user.type === "provider") return <Clients />;
  if (user.type === "client") return <Providers />;
}
