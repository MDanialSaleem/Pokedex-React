import React from "react";
import Type from "./Type";

const TypeCard = props => {
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    alignContent: "flex-start",
    boxSizing: "border-box",
    width: "100%",
    "@media (max-width: 600px)": {
      flexDirection: "column"
    }
  };

  const headingStyle = {
    width: "100%",
    margin: "0px"
  };

  //for some reason, types occur in opposite order, that is primary type occurs later. this is used to fix that.
  props.types.reverse();
  return (
    <div style={styles}>
      <h4 style={headingStyle}>Type</h4>
      {props.types.map(typeObj => (
        <Type key={typeObj.slot} type={typeObj} />
      ))}
    </div>
  );
};

export default TypeCard;
