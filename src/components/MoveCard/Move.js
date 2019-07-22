import Radium from "radium";
import React from "react";
import MoveDetails from "./MoveDetails";

class Move extends React.Component {
  state = {
    showDetails: false
  };

  onShowDetails = () => {
    this.setState({
      showDetails: true
    });
  };

  onHideDetails = () => {
    this.setState({
      showDetails: false
    });
  };

  render() {
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
        <h4 style={headingStyle}>{this.props.move.move.name}</h4>
        <button type="button" style={buttonStyle} onClick={this.onShowDetails}>
          View Details
        </button>
        {this.state.showDetails ? (
          <MoveDetails
            url={this.props.move.move.url}
            name={this.props.move.move.name}
            onClose={this.onHideDetails}
          />
        ) : null}
      </div>
    );
  }
}

export default Radium(Move);
