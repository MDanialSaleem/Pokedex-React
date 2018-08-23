import React from "react";
import Type from "./Type.js"

export default function(props)
{
    const styles = {
        display: "flex",
        flexFlow: "row wrap",
        background: "salmon",
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "flex-start",
        boxSizing: "border-box",
        border: "3px solid red",
        borderRadius: "5px"
    };



    const headingStyle = {
        color: "white",
        width: "100%",
        margin: "0px"
    };

    //for some reason, types occur in opposite order, that is primary type occurs later. this is used to fix that.
    props.types.reverse();
    return(
        <div style={styles}>
            <h4 style={headingStyle}>Type</h4>
            {props.types.map(typeObj => <Type key={typeObj.slot} type={typeObj}/>)}
        </div>
    );
}