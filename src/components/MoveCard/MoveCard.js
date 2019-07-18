import React from "react";
import Radium from "radium";
import Move from "./Move.js";

const MoveCard = props => {
  const styles = {
    width: "100%"
  };
  const internalStyles = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: "1px 3px",
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      flexDirection: "column"
    }
  };

  const headingStyle = {
    background: "lightblue",
    color: "darkblue",
    margin: "3px 3px",
    border: "2px solid lightblue",
    borderRadius: "5px"
  };
  return (
    <div style={styles}>
      <h1 style={headingStyle}>Moves</h1>
      <div style={internalStyles}>
        {props.moves.map(moveObj => (
          <Move key={moveObj.move.name} move={moveObj} />
        ))}
      </div>
    </div>
  );
};

export default Radium(MoveCard);
