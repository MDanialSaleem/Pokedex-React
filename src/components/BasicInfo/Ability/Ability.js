import React from "react"

export default function(props)
{
    const hiddenStyle = {
        color: "red",
        margin: "0px"
    };

    const abilityNameStyle = {
        margin: "0px"
    };

    const styles = {
        display: "inline-block",
        boxSizing: "border-box",
        margin: "3px",
        border: "1px solid blue",
        borderRadius: "5px",
        padding: "3px"
    };

    return(
        <div style={styles}>
            <h3 style={abilityNameStyle}>{props.ability.ability.name}</h3>
            {props.ability.is_hidden ? <h6 style={hiddenStyle}>Hidden</h6> : null}
        </div>
    );
}