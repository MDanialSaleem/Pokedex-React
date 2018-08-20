import React from "react";

export default function(props)
{
    const styles = {
        textAlign: "center"
    };

    const typeStyle = {
        display: "inline",
        background: "white"
    };
    
    props.types.reverse();
    return(
        <div style={styles}>
            {props.types.map(typeObj => <h3 style={typeStyle} key={typeObj.slot}>{typeObj.type.name}</h3>)}
        </div>
    );
}