import React from "react";
import typeToColor from "../../../Util/TypeToColour";
import Label from "../../SharedComponents/Label";

export default function(props) {
  const styles = {
    border: `3px solid ${typeToColor(props.type.type.name)}`,
    color: "black",
    background: typeToColor(props.type.type.name)
  };
  return (
    <>
      <Label style={styles}>{props.type.type.name}</Label>
    </>
  );
}
