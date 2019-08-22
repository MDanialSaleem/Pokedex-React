import React from "react";
import typeToColor from "../../../Util/TypeToColour";
import Label from "../../SharedComponents/Label";

export default function(props) {
  const styles = {
    display: "inline",
    border: `3px solid ${typeToColor(props.type.type.name)}`,
    color: "white",
    marginBottom: "5px",
    background:
      props.type.slot === 1 ? typeToColor(props.type.type.name) : "none"
  };
  return (
    <>
      <Label sz="md" style={styles}>
        {props.type.type.name}
      </Label>
    </>
  );
}
