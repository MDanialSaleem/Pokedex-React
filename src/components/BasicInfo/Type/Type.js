import React from "react";

export default function(props) {
  const importanceStyle = {
    color: "blue",
    margin: "0px"
  };

  const internalAbilityStyle = {
    margin: "0px"
  };

  const style = {
    display: "inline-block",
    boxSizing: "border-box",
    margin: "3px",
    border: "1px solid blue",
    borderRadius: "5px",
    padding: "3px"
  };
  return (
    <div style={style}>
      <h3 style={internalAbilityStyle}>{props.type.type.name}</h3>
      <h6 style={importanceStyle}>
        {props.type.slot === 1 ? "Primary" : "Secondary"}
      </h6>
    </div>
  );
}
