import React from "react";

export default function(props)
{
    const styles = {
        textAlign: "center",
        background: "green"
    };

    const abilityStyle = {
        display: "inline",
        background: "white",
        margin: "0px 3px"
    };

    const headingStyle = {
        color: "red"
    };
    props.abilities.reverse();
    return(
        <div style={styles}>
            <h6 style={headingStyle}>Abilities</h6>
            {props.abilities.map(abilityObj => <h3 style={abilityStyle} key={abilityObj.slot}>{abilityObj.ability.name}</h3>)}
        </div>
    );
}