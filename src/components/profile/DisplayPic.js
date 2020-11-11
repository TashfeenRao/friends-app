import { Avatar } from "@material-ui/core";
import useStyles from "../cutomHooks/UseStyles";
import { userContext } from "../../App";
import { useContext } from "react";

export default function DisplayPic() {
  const { user } = useContext(userContext);
  const { image } = user;
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt=""
        src={`http://localhost:1337${image.url}`}
        className={classes.large}
      />
    </div>
  );
}
