import { Avatar, CircularProgress, Fab } from "@material-ui/core";
import useStyles from "../cutomHooks/UseStyles";
import Axios from "axios";
import toastError from "../toast/toastError";
import { useState } from "react";
import toastSuccess from "../toast/toastSuccess";
import AddIcon from "@material-ui/icons/Add";

export default function DisplayPic() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState();
  const [file, setFile] = useState(null);
  const { image } = user;
  const [src, setSrc] = useState(image && image.url);

  const classes = useStyles();

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
        setSrc(response.data[0].url);
        setLoading(false);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...user, image: { url: response.data[0].url } }),
        );
        toastSuccess("successfully updated image");
      })
      .catch(function (error) {
        toastError("Image could not upload, please try again");
        setLoading(false);
      });
  };
  if (loading) return <CircularProgress color="secondary" size={50} />;
  return (
    <div>
      <Avatar alt="" src={src} className={classes.large}>
        {user.username[0].toUpperCase()}
      </Avatar>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e) => handleUpload(e)}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span">
          <AddIcon color="secondary" />
        </Fab>
      </label>
    </div>
  );
}
