import React from "react";

import Ability from "./Ability.js";

export default function(props)
{
    const styles = {
        display: "flex",
        flexFlow: "row wrap",
        background: "green",
        alignItems: "center",
        justifyContent: "space-between"
    };



    const headingStyle = {
        color: "blue",
        width: "100%"
    };



    props.abilities.reverse();
    return(
        <div style={styles}>
            <h4 style={headingStyle}>Abilities</h4>
            {props.abilities.map(abilityObj => <Ability key={abilityObj.slot} ability={abilityObj}/>)}
        </div>
    );
}