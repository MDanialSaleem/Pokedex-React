import React from "react";
import axios from "axios";
//material ui imports
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
//icons
import PowerIcon from "@material-ui/icons/FlashOn";
import TargetIcon from "@material-ui/icons/Adjust";
import CloseIcon from "@material-ui/icons/Close";

import BasicLoader from "../Loader/BasicLoader";
import TypeToColor from "../../Util/TypeToColour";

class MoveDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: null,
      accuracy: null,
      power: null,
      loaded: false,
      description: null
    };
  }

  componentDidMount() {
    //for some reason, in response data links are modified to include localhost. this is a work-around for that.
    let requestURL = this.props.url.replace(
      "http://localhost",
      "https://cdn.rawgit.com/Naramsim/ninjask/master/data"
    );
    requestURL = requestURL.concat("index.json");
    axios.get(requestURL).then(response => {
      this.setState({
        type: response.data.type.name,
        accuracy: response.data.accuracy,
        power: response.data.power,
        loaded: true,
        description: response.data.flavor_text_entries[1].flavor_text
      });
    });
  }

  render() {
    const chipStyles = {
      margin: "10px"
    };

    const pStyle = {
      textAlign: "justify"
    };

    const cardStyles = {
      maxWidth: "300px",
      margin: "20px"
    };

    const groupStyle = {
      width: "100%"
    };

    const colorStyles = {
      width: "100%"
    };
    if (this.state.type !== null) {
      colorStyles.background = TypeToColor(this.state.type);
    }

    const styles = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      position: "fixed",
      top: "0",
      left: "0"
    };
    return (
      //the position is fixed to display it on top of others.
      //the div covers the entire page making it impossible to click on other moves to
      //view details of multiple moves together
      <div style={styles}>
        {this.state.loaded ? (
          <Card style={cardStyles}>
            <CardActions>
              <IconButton onClick={this.props.onClose}>
                <CloseIcon />
              </IconButton>
            </CardActions>
            <CardContent>
              <ButtonGroup style={groupStyle} size="medium" disabled>
                <Button>{this.props.name}</Button>
                <Button style={colorStyles}>{this.state.type}</Button>
              </ButtonGroup>
              <p style={pStyle}>
                {this.state.description !== null ? this.state.description : ""}
              </p>
              <div>
                {/* null checks are needed for each attribute even after using loader becuase for some moves certain attributes are missing. */}
                {this.state.power !== null ? (
                  <Chip
                    style={chipStyles}
                    label={this.state.power}
                    icon={<PowerIcon />}
                  />
                ) : null}
                {this.state.accuracy !== null ? (
                  <Chip
                    style={chipStyles}
                    label={this.state.accuracy}
                    icon={<TargetIcon />}
                  />
                ) : null}
              </div>
            </CardContent>
          </Card>
        ) : (
          <BasicLoader />
        )}
      </div>
    );
  }
}

export default MoveDetails;
