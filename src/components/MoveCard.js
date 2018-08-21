import React from "react";
import Move from "./Move.js";
export default function(props)
{
    const styles = {
        width: "100%",
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    };


    return(
        <div style={styles}>
            {props.moves.map((moveObj,index) => <Move key = {index} move={moveObj.move} />)}
        </div>
    );
}