import React from "react";
import { Container, Row, Col } from "react-grid-system";
import AbilityCard from "./Ability/AbilityCard";
import TypeCard from "./Type/TypeCard";
import ImageCard from "./ImageCard";
import Stats from "./Stats";

const BasicInfo = props => {
  const numberStyle = {
    fontSize: "32px",
    background: "black",
    color: "white"
  };

  const nameStyle = {
    background: "white",
    fontSize: "32px"
  };

  return (
    <Row>
      <Col md={6}>
        <Row justify="center" style={{ marginBottom: "10px" }}>
          <text style={numberStyle}>#{props.id}</text>
          <text style={nameStyle}>{props.data.name}</text>
        </Row>
        <Row justify="center">
          <ImageCard id={props.id} name={props.data.name} />
        </Row>
        <Row justify="center">
          <TypeCard types={props.data.types} />
        </Row>
        <Row justify="center">
          <AbilityCard abilities={props.data.abilities} />
        </Row>
      </Col>
      <Col md={6}>
        <Stats stats={props.data.stats} />
      </Col>
    </Row>
  );
};

export default BasicInfo;
