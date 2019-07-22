import React from "react";
import Chip from "@material-ui/core/Chip";

export default function(props) {
  return <Chip label={props.ability.ability.name} />;
}
