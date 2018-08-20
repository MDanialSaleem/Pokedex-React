import React from "react";


function ImageCard(props)
{
    const imageStyles = {
        display: "block",
        border: "20px solid yellow",
        borderRadius: "50%",
        background: "white"
    };

    return(
        <img style={imageStyles} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} />
    );
}

export default ImageCard;