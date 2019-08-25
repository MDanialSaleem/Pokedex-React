import React from "react";
import {
  red,
  orange,
  pink,
  green,
  blue,
  yellow
} from "@material-ui/core/colors";
import LinearProgressBar from "../SharedComponents/LinearProgressBar";

const getColors = name => {
  switch (name) {
    case "attack":
      return red[900];
    case "defense":
      return yellow[500];
    case "special-defense":
      return orange[500];
    case "special-attack":
      return pink[800];
    case "hp":
      return green[500];
    case "speed":
      return blue[500];
    default:
      return "black";
  }
};

export default props => {
  return (
    <div>
      {props.stats.map(stat => (
        <LinearProgressBar
          key={stat.stat.name}
          label={stat.stat.name}
          end={500}
          progress={stat.base_stat * 2 + 204}
          time={10}
          fillColor={getColors(stat.stat.name)}
        />
      ))}
    </div>
  );
};
