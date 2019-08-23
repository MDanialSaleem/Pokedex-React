import React from "react";
import typeToColor from "../../../Util/TypeToColour";
import Label from "../../SharedComponents/Label";

export default function(props) {
  const styles = {
    display: "inline",
    border: `3px solid ${typeToColor(props.type.type.name)}`,
    marginBottom: "5px",
    color: "black",
    background: typeToColor(props.type.type.name)
  };
  return (
    <>
      <Label sz="md" style={styles}>
        {props.type.type.name}
      </Label>
    </>
  );
}
