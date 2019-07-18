import React from "react";
import Radium from "radium";
import AbilityCard from "./Ability/AbilityCard";
import TypeCard from "./Type/TypeCard";
import ImageCard from "./ImageCard";

function BasicInfo(props) {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyItems: "center",
    alignItems: "center",
    //grid ends here
    background: "lightgray",
    padding: "5px 5px",
    border: "5px solid black",
    borderRadius: "10px",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
      gridRowGap: "10px",
      width: "90%"
    }
  };

  const numberStyle = {
    background: "black",
    color: "white",
    display: "inline",
    flexGrow: 1
  };

  const nameStyle = {
    background: "white",
    display: "inline",
    flexGrow: 1
  };

  const internalStyle = {
    display: "grid",
    gridRowGap: "10px",
    justifyItems: "center",
    //grid ends here
    padding: "10px",
    width: "100%"
  };

  const nameNumberStyle = {
    display: "flex",
    width: "300px",
    fontSize: "2em",
    "@media (max-width: 600px)": {
      flexDirection: "column",
      width: "100%",
      justifyContent: "flex-start"
    }
  };

  return (
    <div style={styles}>
      <ImageCard id={props.id} name={props.data.name} />
      <div style={internalStyle}>
        <div style={nameNumberStyle}>
          <text style={numberStyle}>#{props.id}</text>
          <text style={nameStyle}>{props.data.name}</text>
        </div>
        <TypeCard types={props.data.types} />
        <AbilityCard abilities={props.data.abilities} />
      </div>
    </div>
  );
}

export default Radium(BasicInfo);
