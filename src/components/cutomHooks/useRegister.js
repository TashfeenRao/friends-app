import toastError from "../toast/toastError";
import { baseUrl, config } from "./Config";

const { default: Axios } = require("axios");
const { useState } = require("react");

export const useRegister = (setUser) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = (data) => {
    console.log(data);
    const newConfig = {
      ...config,
      method: "post",
      url: `${baseUrl}auth/local/register`,
      data: data,
    };

    return (
      setLoading(true),
      Axios(newConfig)
        .then((response) => {
          setUser(response.data.user);
          localStorage.setItem("token", response.data.jwt);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          toastError("Already exist username/email, Please Write Unique");
        })
    );
  };

  const handleSign = (data) => {
    const newConfig = {
      ...config,
      method: "post",
      url: `${baseUrl}auth/local`,
      data: data,
    };

    return (
      setLoading(true),
      Axios(newConfig)
        .then((response) => {
          setUser(response.data.user);
          localStorage.setItem("token", response.data.jwt);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error);
          toastError("Invalid username/password");
        })
    );
  };

  return { handleSign, handleSignUp, loading, error };
};
