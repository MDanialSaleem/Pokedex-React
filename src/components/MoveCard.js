import React from "react";

function MoveCard(props)
{
    return(
        props.show ? props.moves.map((moveObj,index) => <h3 key={index}>{moveObj.move.name}</h3>) : null
    );
}
//to check git
export default MoveCard;