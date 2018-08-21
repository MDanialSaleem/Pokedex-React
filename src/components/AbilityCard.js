import React from "react";

import Ability from "./Ability.js";

export default function(props)
{
    const styles = {
        display: "flex",
        flexFlow: "row wrap",
        background: "lightblue",
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "flex-start",
        boxSizing: "border-box",
        border: "3px solid blue",
        borderRadius: "5px"
    };



    const headingStyle = {
        color: "white",
        width: "100%",
        margin: "0px"
    };



    props.abilities.reverse();
    return(
        <div style={styles}>
            <h4 style={headingStyle}>Abilities</h4>
            {props.abilities.map(abilityObj => <Ability key={abilityObj.slot} ability={abilityObj}/>)}
        </div>
    );
}