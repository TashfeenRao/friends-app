import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  marginTop: "10px",
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  icon: {
    margin: theme.spacing(1),
  },
  iconHover: {
    margin: theme.spacing(1),
    "&:hover": {
      color: red[800],
    },
  },
  input: {
    display: "none",
  },
  button: {
    color: "#F1E9DA",
  },
  secondaryButton: {
    color: "gray",
  },
}));
export default useStyles;
