import React from "react";
import { Row, Col } from "react-grid-system";
import GlobalContext from "../../context/Global/globalContext";

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
      // value = value.toLowerCase(); //to prevent case issues.
      // const index = props.list.findIndex(pokemon => pokemon === value);
      // if (index !== -1) {
      //   setError(false);
      //   if (index + 1 !== props.id) {
      //     props.loadNew(index + 1);
      //   }
      //   props.startLoading();
      //   props.loadNew(index + 1);
      // } else {
      //   setError(true);
      // }

      throw new Error("heck lmao");
    }
  };

  const handleInput = eventObj => {
    if (eventObj.keyCode === 13) {
      handleInitialSubmit(currentValue);
    } else {
      setCurrentValue(eventObj.target.value);
    }
  };

  const buttonStyles = {
    boxSizing: "border-box",
    border: "3px solid lightblue",
    borderRadius: "10px",
    fontSize: "30px",
    width: "100%"
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
      <Row>
        <Col sm={8}>
          <input
            style={inputStyles}
            type="text"
            placeholder={currentValue}
            onKeyUp={handleInput}
          />
        </Col>
        <Col sm={4}>
          <button
            type="button"
            style={buttonStyles}
            onClick={() => handleInitialSubmit(currentValue)}
          >
            Search
          </button>
        </Col>
      </Row>
      <Row>{error ? <h4>No Such Pokemon</h4> : null}</Row>
    </>
  );
};
export default Searchbar;
