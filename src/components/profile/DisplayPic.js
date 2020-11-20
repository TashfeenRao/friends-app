import { Avatar, CircularProgress } from "@material-ui/core";
import { useUpload } from "../cutomHooks/useUpload";
import useStyles from "../cutomHooks/UseStyles";
import Uploader from "./Uploader";

export default function DisplayPic() {
  const { handleUpload, user, loading } = useUpload();
  const classes = useStyles();
  const { image } = user;

  if (loading) return <CircularProgress color="secondary" size={50} />;
  return (
    <div>
      <Avatar alt="" src={image && image.url} className={classes.large}>
        {user.username[0].toUpperCase()}
      </Avatar>
      <Uploader handleUpload={handleUpload} />
    </div>
  );
}
