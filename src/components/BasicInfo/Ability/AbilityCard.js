import React from "react";
import Container from "@material-ui/core/Container";
import Chip from "@material-ui/core/Chip";



const AbilityCard = props => {
  //because otherwise hidden ability would be the first.
  props.abilities.reverse();
  return (
    <Container maxWidth="sm">
      {props.abilities.map(abilityObj => (
        <Chip key={abilityObj.slot} label={abilityObj.ability.name} />
      ))}
    </Container>
  );
};

export default AbilityCard;
