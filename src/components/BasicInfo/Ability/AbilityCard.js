import React from "react";
import Label from "../../SharedComponents/Label";

const AbilityCard = props => {
  //because otherwise hidden ability would be the first.
  props.abilities.reverse();
  const styles = {
    display: "flex",
    flexDirection: "row",
    flexFlow: "wrap",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "flex-start",
    boxSizing: "border-box",
    width: "100%",
    "@media (max-width: 600px)": {
      flexDirection: "column"
    }
  };

  const headingStyle = {
    color: "white",
    width: "100%",
    margin: "0px"
  };

  const chipStyle = {
    margin: "5px",
    borderRadius: "500px" //large value for capsule shape.
  };

  return (
    <div style={styles}>
      <h4 style={headingStyle}>Abilities</h4>
      {props.abilities.map(abilityObj => (
        <Label style={chipStyle} key={abilityObj.slot}>
          {abilityObj.ability.name}
        </Label>
      ))}
    </div>
  );
};

export default AbilityCard;
