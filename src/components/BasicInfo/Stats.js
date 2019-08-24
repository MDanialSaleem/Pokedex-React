import React from "react";
import LinearProgressBar from "../SharedComponents/LinearProgressBar";

export default props => {
  return (
    <div>
      {props.stats.map(stat => (
        <LinearProgressBar
          key={stat.stat.name}
          label={stat.stat.name}
          end={500}
          progress={stat.base_stat * 2 + 204}
        />
      ))}
    </div>
  );
};
