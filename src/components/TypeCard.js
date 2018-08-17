import React from "react";

export default function(props)
{
    props.types.reverse();
    return(
        props.types.map(typeObj => <h3 key={typeObj.slot}>{typeObj.type.name} </h3>)
    );
}