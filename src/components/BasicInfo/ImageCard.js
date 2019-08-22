import React from "react";

const ImageCard = props => {
  const imageStyles = {
    display: "block",
    border: "20px solid yellow",
    borderRadius: "50%",
    background: "white",
    margin: "0px 3px"
  };

  return (
    <img
      style={imageStyles}
      /*src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}*/ alt={
        props.name
      }
    />
  );
};

export default ImageCard;
