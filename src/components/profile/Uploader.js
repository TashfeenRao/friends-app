import { Fab } from "@material-ui/core";
import useStyles from "../cutomHooks/UseStyles";
import AddIcon from "@material-ui/icons/Add";

export default function Uploader({ handleUpload }) {
  const classes = useStyles();

  return (
    <>
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
    </>
  );
}
