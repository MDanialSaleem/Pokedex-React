import React from "react"

export default function(props)
{
    const hiddenStyle = {
        color: "red",
        margin: "0px"
    };

    const internalAbilityStyle = {
        margin: "0px"
    };

    const abilityStyle = {
        display: "inline-block",
        boxSizing: "border-box",
        margin: "3px",
        border: "1px solid blue",
        borderRadius: "10%",
        padding: "3px"
    };
    return(
        <div style={abilityStyle}>
            <h3 style={internalAbilityStyle}>{props.ability.ability.name}</h3>
            {props.ability.is_hidden ? <h6 style={hiddenStyle}>Hidden</h6> : null}
        </div>
    );
}