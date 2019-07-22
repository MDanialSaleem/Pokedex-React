import React from "react";
import Button from "@material-ui/core/Button";

export default function(props) {
  return (
    <Button variant={props.type.slot === 1 ? "contained" : "outlined"}>
      {props.type.type.name}
    </Button>
  );
}
