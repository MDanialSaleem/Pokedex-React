import React from "react";
import { Row, Col } from "react-grid-system";
import GlobalContext from "../../context/Global/globalContext";
import Button from "../SharedComponents/Button";
import List from "../../Util/data";

const Searchbar = () => {
  const globalContext = React.useContext(GlobalContext);
  const [currentValue, setCurrentValue] = React.useState("Enter id or name");
  const [error, setError] = React.useState(false);

  //used for performing certain checks before calling the API.
  const handleInitialSubmit = value => {
    const number = Number.parseInt(value, 10);
    if (!isNaN(number)) {
      if (number >= 1 && number <= 721) {
        setError(false);
        globalContext.loadNewPokemon(value);
      } else {
        setError(true);
      }
    } //if a name was submitted. Number.parseInt return NaN if it can't convert the string to a valid number.
    else {
      // eslint-disable-next-line no-param-reassign
      value = value.toLowerCase(); //to prevent case issues.
      const index = List.findIndex(pokemon => pokemon === value);
      if (index !== -1) {
        setError(false);
        globalContext.loadNewPokemon(index + 1);
      } else {
        setError(true);
      }
    }
  };

  const handleInput = eventObj => {
    if (eventObj.keyCode === 13) {
      handleInitialSubmit(currentValue);
    } else {
      setCurrentValue(eventObj.target.value);
    }
  };

  const inputStyles = {
    border: "3px solid lightblue",
    boxSizing: "border-box",
    borderRadius: "10px",
    background: "#F5FFFA",
    fontSize: "30px",
    width: "100%"
  };
  return (
    <>
      <Row align="center" style={{ padding: "10px 0px" }}>
        <Col sm={8}>
          <input
            style={inputStyles}
            type="text"
            placeholder={currentValue}
            onKeyUp={handleInput}
          />
        </Col>
        <Col sm={4}>
          <Button
            style={{ margin: "10px 0px" }}
            sz="lg"
            onClick={() => handleInitialSubmit(currentValue)}
          >
            Search
          </Button>
        </Col>
      </Row>
      <Row>{error ? <h4>No Such Pokemon</h4> : null}</Row>
    </>
  );
};
export default Searchbar;
