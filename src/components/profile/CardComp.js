import Card from "@material-ui/core/Card";
import useStyles from "../cutomHooks/UseStyles";
import { useSpring, animated } from "react-spring";
import {
  Avatar,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AddFriend from "./AddFriend";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 100,
  (x - window.innerWidth / 2) / 100,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function CardComp({ username, email, id, url, description }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 150, friction: 100 },
  }));
  const classes = useStyles();

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
    >
      <Card
        className={classes.root}
        variant="outlined"
        style={{
          backgroundColor: "rgb(20,20,47)",
          color: "#F1E9DA",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Avatar
            alt=""
            style={{ backgroundColor: "#f50057", color: "#F1E9DA" }}
            src={url}
            className={classes.large}
            color="secondary"
          >
            {username[0].toUpperCase()}
          </Avatar>
        </div>
        <CardContent>
          <Typography variant="h5" component="h2">
            {username}
          </Typography>
          <Typography variant="body2" component="p">
            {description ? description : "Hi, Im using Friends app...."}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            style={{
              textDecoration: "none",
              color: "#F1E9DA",
              backgroundColor: "#f50057",
              padding: "15px",
              borderRadius: "5px",
            }}
            to={`/user/${id}`}
          >
            Profile
          </Link>
          <AddFriend fId={id} />
        </CardActions>
      </Card>
    </animated.div>
  );
}
