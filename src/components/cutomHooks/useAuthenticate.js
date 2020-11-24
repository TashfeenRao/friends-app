import toastSuccess from "../toast/toastSuccess";

const { useEffect, useState } = require("react");

export const useAuthenticate = () => {
  const [loggedin, setLoggedin] = useState(false);
  const initialState = () => JSON.parse(localStorage.getItem("user") || null);
  const [user, setUser] = useState(initialState);
  useEffect(() => {
    if (user) {
      setLoggedin(true);
    }
  }, [user]);

  useEffect(() => {
    if (loggedin) {
      toastSuccess("Successfully Loggedin");
    }
  }, [loggedin]);

  return { loggedin, setLoggedin, setUser, user };
};
