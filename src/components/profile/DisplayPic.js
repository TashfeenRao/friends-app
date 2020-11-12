import { Avatar, CircularProgress, Fab } from "@material-ui/core";
import useStyles from "../cutomHooks/UseStyles";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import Axios from "axios";
import toastError from "../toast/toastError";
import { useState } from "react";

export default function DisplayPic() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState();
  const [file, setFile] = useState(null);
  const { image } = user;
  const [src, setSrc] = useState(image.url);

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
      url: "http://localhost:1337/upload",
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
      })
      .catch(function (error) {
        toastError("Image could not upload, please try again");
        setLoading(false);
      });
  };
  if (loading) return <CircularProgress color="secondary" size={50} />;
  return (
    <div>
      <Avatar
        alt=""
        src={`http://localhost:1337${src}`}
        className={classes.large}
      />
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e) => handleUpload(e)}
      />
      <label htmlFor="contained-button-file">
        <Fab component="span" className={classes.button}>
          <AddPhotoAlternateIcon />
        </Fab>
      </label>
    </div>
  );
}
