import React from "react";

export default function(props)
{
    return(
        props.moves.map((moveObj,index) => <h3 key={index}>{moveObj.move.name}</h3>)
    );
}