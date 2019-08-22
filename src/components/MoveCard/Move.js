import React from "react";
import MoveDetails from "./MoveDetails";

const Move = props => {
  const [showDetails, setShowDetails] = React.useState(false);

  const onShowDetails = () => setShowDetails(true);
  const onHideDetails = () => setShowDetails(false);

  const styles = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    width: "30%",
    border: "2px solid darkblue",
    background: "lightsteelblue",
    borderRadius: "5px",
    flexGrow: 1,
    boxSizing: "border-box",
    "@media (max-width: 600px)": {
      width: "100%"
    }
  };

  const headingStyle = {
    margin: "0px 3px"
  };

  const buttonStyle = {
    background: "blue",
    margin: "3px 3px",
    borderRadius: "5px",
    border: "1px solid darkblue"
  };

  return (
    <div style={styles}>
      <h4 style={headingStyle}>{props.move.move.name}</h4>
      <button type="button" style={buttonStyle} onClick={onShowDetails}>
        View Details
      </button>
      {showDetails ? (
        <MoveDetails
          url={props.move.move.url}
          name={props.move.move.name}
          onClose={onHideDetails}
        />
      ) : null}
    </div>
  );
};

export default Move;
