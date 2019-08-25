import React from "react";
import { Row, Col } from "react-grid-system";
import Label from "../../SharedComponents/Label";

const AbilityCard = props => {
  //because otherwise hidden ability would be the first.
  props.abilities.reverse();

  const chipStyle = {
    borderRadius: "500px", //large value for capsule shape.
    color: "black",
    backgroundColor: "white"
  };

  return (
    <Col>
      <Row justify="center">
        <h4>Abilities</h4>
      </Row>
      <Row justify="center">
        {props.abilities.map(abilityObj => (
          <Col xs={4} key={abilityObj.slot}>
            <Label style={chipStyle}>{abilityObj.ability.name}</Label>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default AbilityCard;
