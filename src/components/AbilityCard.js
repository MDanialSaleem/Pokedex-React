import React from "react";

function AbilityCard(props)
{
    props.abilities.reverse();
    return(
        props.abilities.map(abilityObj => <h3 key={abilityObj.slot}>{abilityObj.ability.name}</h3>)
    );
}


export default AbilityCard;