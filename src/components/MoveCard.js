import React from "react";
import Move from "./Move.js";
export default function(props)
{
    const internalStyles = {
        width: "100%",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    };

    const headingStyle = {
        background: "lightblue",
        color: "darkblue",
        margin: "3px 3px",
        border: "2px solid lightblue",
        borderRadius: "5px"
    };

    return(
        <div>
            <h1 style={headingStyle}>Moves</h1>
            <div style={internalStyles}>
                {props.moves.map((moveObj,index) => <Move key = {index} move={moveObj} />)}
            </div>
        </div>
    );
}