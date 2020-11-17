import { useEffect, useState } from "react";
import Axios from "axios";
import { config } from "./Config";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    return (
      setLoading(true),
      Axios(config)
        .then((response) => {
          setUsers(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
        })
    );
  }, []);

  return { loading, users, error };
};
export default useFetch;
