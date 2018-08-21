import React from "react";


export default function(props)
{
    const styles ={
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        width: "30%",
        margin: "1px 3px",
        boxSizing: "border-box",
        border: "2px solid darkblue",
        background: "lightsteelblue",
        borderRadius: "5px",
        flexGrow: 1
    };

    const headingStyle = {
        margin: "0px 3px"
    };

    const buttonStyle = {
        background: "blue",
        margin: "3px 3px",
        borderRadius: "5px",
        border: "1px solid darkblue"
    };

    return (
        <div style={styles}>
            <h4 style={headingStyle}>{props.move.name}</h4>
            <button style={buttonStyle}>View Details</button>
        </div>
    );
}