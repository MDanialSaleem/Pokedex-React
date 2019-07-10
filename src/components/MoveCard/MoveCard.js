import React from "react";
import Move from "./Move.js"
import Radium from "radium";

const MoveCard = function(props)
{
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

    return(
        <div style={styles}>
            <h1 style={headingStyle}>Moves</h1>
            <div style={internalStyles}>
                {props.moves.map((moveObj,index) => <Move key = {index} move={moveObj} />)}
            </div>
        </div>
    );
};

export default Radium(MoveCard);