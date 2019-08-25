import React from "react";
import { Row, Col } from "react-grid-system";
import Type from "./Type";

const TypeCard = props => {
  //for some reason, types occur in opposite order, that is primary type occurs later. this is used to fix that.
  props.types.reverse();
  return (
    <Col>
      <Row justify="center">
        <h4>Type</h4>
      </Row>
      <Row justify="center">
        {props.types.map(typeObj => (
          <Col xs={4} key={typeObj.slot}>
            <Type type={typeObj} />
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default TypeCard;
