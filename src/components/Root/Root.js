import { CircularProgress } from "@material-ui/core";
import { userContext } from "../../App";
import FourZeroFour from "./FourZeroFour";
import useFetch from "../cutomHooks/useFetch";
import Routes from "./Routes";

export default function Root({ user, setLoggedin, setUser, loggedin }) {
  const { loading, users, error } = useFetch();

  const filUsers =
    users && users.filter((c) => c.type !== `${user.type}` && c.id !== user.id);

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

  if (error) return <FourZeroFour />;

  return (
    <userContext.Provider
      value={{ user, setLoggedin, filUsers, setUser, loggedin }}
    >
      <Routes />
    </userContext.Provider>
  );
}
