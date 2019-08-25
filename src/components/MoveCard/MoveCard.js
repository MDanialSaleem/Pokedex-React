import React from "react";
import { Row, Col } from "react-grid-system";
import Move from "./Move";

const MoveCard = props => {
  const headingStyle = {
    background: "lightblue",
    width: "100%",
    color: "darkblue",
    border: "2px solid lightblue",
    borderRadius: "5px",
    textAlign: "center"
  };
  return (
    <>
      <Row>
        <h1 style={headingStyle}>Moves</h1>
      </Row>
      <Row>
        {props.moves.map(moveObj => (
          <Col md={4} key={moveObj.move.name} style={{ marginBottom: "10px" }}>
            <Move move={moveObj} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default MoveCard;
