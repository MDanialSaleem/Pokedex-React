import React from "react";
import Radium from "radium";
import Container from "@material-ui/core/Container";
import Ability from "./Ability";

const AbilityCard = props => {
  //because otherwise hidden ability would be the first.
  props.abilities.reverse();
  return (
    <Container maxWidth="sm">
      {props.abilities.map(abilityObj => (
        <Ability key={abilityObj.slot} ability={abilityObj} />
      ))}
    </Container>
  );
};

export default Radium(AbilityCard);
