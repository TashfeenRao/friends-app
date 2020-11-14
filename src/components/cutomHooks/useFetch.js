import { useEffect, useState } from "react";
import Axios from "axios";
import toastError from "./UseStyles";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const config = {
      method: "get",
      url: "https://friends-app-strapi.herokuapp.com/users",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    setLoading(true);
    const unsubcribe = Axios(config)
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        toastError("could not able to find users");
        setLoading(false);
      });
    return unsubcribe;
  }, []);

  return { loading, users };
};
export default useFetch;
