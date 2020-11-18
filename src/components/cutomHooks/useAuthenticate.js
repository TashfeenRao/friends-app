import toastSuccess from "../toast/toastSuccess";

const { useEffect, useState } = require("react");

export const useAuthenticate = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(
    null || JSON.parse(localStorage.getItem("user")),
  );

  useEffect(() => {
    user && toastSuccess("Successfully Loggedin");
    setLoggedin(true);
  }, []);

  return { loggedin, setLoggedin, setUser, user };
};
