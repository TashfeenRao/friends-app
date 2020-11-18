import { config, baseUrl } from "./Config";
import { useContext, useState } from "react";
import Axios from "axios";
import toastSuccess from "../toast/toastSuccess";
import toastError from "../toast/toastError";
import { userContext } from "../../App";

export const useEdit = () => {
  const { user, setUser } = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEdit = (input) => {
    setOpen(false);
    setLoading(true);
    const newConfig = {
      ...config,
      method: "put",
      url: `${baseUrl}users/${user.id}`,
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      data: { description: input },
    };

    return Axios(newConfig)
      .then(function (response) {
        setUser({ ...user, description: response.data.description });
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            description: response.data.description,
          }),
        );
        toastSuccess("Added Your Description");
        setLoading(false);
      })
      .catch(function (error) {
        toastError("could not update please try again");
        setLoading(false);
      });
  };

  return { loading, handleEdit, open, setOpen, user };
};
