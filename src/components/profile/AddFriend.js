import React from "react";
import { Link } from "react-router-dom";

const AddFriend = () => {
  return (
    <Link
      style={{
        textDecoration: "none",
        color: "#F1E9DA",
        backgroundColor: "#f50057",
        padding: "10px",
        borderRadius: "5px",
      }}
      to={`/user/`}
    >
      Add Friend
    </Link>
  );
};

export default AddFriend;
