import Card from "@material-ui/core/Card";
import useStyles from "../cutomHooks/UseStyles";
import { CardActions, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function CardComp({ username, email, id }) {
  const classes = useStyles();

  return (
    <Card
      className={classes.root}
      variant="outlined"
      style={{ backgroundColor: "#f2f2" }}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {username}
        </Typography>
        <Typography variant="h5" component="h2">
          {email}
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/user/${id}`}>Profile</Link>
      </CardActions>
    </Card>
  );
}
