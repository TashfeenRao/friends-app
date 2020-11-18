import Axios from "axios";
import { useContext, useState } from "react";
import { userContext } from "../../App";
import toastError from "../toast/toastError";
import toastSuccess from "../toast/toastSuccess";

export const useUpload = () => {
  const { user, setUser } = useContext(userContext);
  const [loading, setLoading] = useState();
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    const fd = new FormData();
    fd.append("files", file);
    fd.append("refId", user.id);
    fd.append("field", "image");
    fd.append("source", "users-permissions");
    fd.append("ref", "user");
    const config = {
      method: "post",
      url: "https://friends-app-strapi.herokuapp.com/upload",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: fd,
    };
    setLoading(true);
    Axios(config)
      .then(function (response) {
        setFile(response.data);
        setUser({ ...user, image: { url: response.data[0].url } });
        setLoading(false);
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...user,
            image: { url: response.data[0].url },
          }),
        );
        toastSuccess("successfully updated image");
      })
      .catch(function (error) {
        toastError("Image could not upload, please try again");
        setLoading(false);
      });
  };
  return { handleUpload, user, loading };
};
