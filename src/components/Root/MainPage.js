import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function MainPage() {
  const role = false;
  return (
    <>
      {role ? (
        <Button variant="contained" color="primary">
          <Link to="/provider">Provider</Link>
        </Button>
      ) : (
        <>
          <Button variant="contained" color="primary">
            <Link to="/provider">Provider</Link>
          </Button>
          <Button variant="contained" color="primary">
            <Link to="/client">Client</Link>
          </Button>
        </>
      )}
    </>
  );
}
