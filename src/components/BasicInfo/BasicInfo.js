import React from "react";
import { Container, Row, Col } from "react-grid-system";
import AbilityCard from "./Ability/AbilityCard";
import TypeCard from "./Type/TypeCard";
import ImageCard from "./ImageCard";
import Stats from "./Stats";

const BasicInfo = props => {
  const numberStyle = {
    background: "black",
    color: "white"
  };

  const nameStyle = {
    background: "white"
  };

  return (
    <>
      <Col sm={6}>
        <div>
          <text style={numberStyle}>#{props.id}</text>
          <text style={nameStyle}>{props.data.name}</text>
        </div>
        <ImageCard id={props.id} name={props.data.name} />
        <TypeCard types={props.data.types} />
        <AbilityCard abilities={props.data.abilities} />
      </Col>
      <Col sm={6}>
        <div>
          <Stats stats={props.data.stats} />
        </div>
      </Col>
    </>
  );
};

export default BasicInfo;
