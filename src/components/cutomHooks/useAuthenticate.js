const { useEffect, useState } = require("react");

export const useAuthenticate = () => {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState(
    null || JSON.parse(localStorage.getItem("user")),
  );

  useEffect(() => {
    if (user) setLoggedin(true);
  }, [user]);

  return { loggedin, setLoggedin, setUser, user };
};
