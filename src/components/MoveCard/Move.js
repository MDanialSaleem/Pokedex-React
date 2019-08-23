import React from "react";
import MoveDetails from "./MoveDetails";
import Button from "../SharedComponents/Button";

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
    margin: "auto",
    color: "white"
  };

  const buttonStyle = {
    width: "content",
    margin: "5px"
  };

  return (
    <div style={styles}>
      <h4 style={headingStyle}>{props.move.move.name}</h4>
      <Button sz="sm" onClick={onShowDetails} style={buttonStyle}>
        View Details
      </Button>
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
