import React from "react";
import axios from "axios";
import BasicLoader from "../Loader/BasicLoader";

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

class MoveDetails extends React.Component {
  state = {
    type: null,
    accuracy: null,
    power: null,
    loaded: false
  };

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
        loaded: true
      });
    });
  }
  render() {
    //the position is fixed to display it on top of others.
    //the div covers the entire page making it impossible to click on other moves to
    //view details of multiple moves together
    const styles = {
      position: "fixed",
      zIndex: "1",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
    return this.state.loaded ? (
      //null checks are needed for each attribute even after using loader
      //becuase for some moves certain attributes are missing.
      <div style={styles}>
        <Card>
          <CardActions>
            <IconButton onClick={this.props.onClose}>
              <CloseIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <ButtonGroup size="medium" disabled>
              <Button>{this.props.name}</Button>
              {this.state.type !== null ? (
                <Button>{this.state.type}</Button>
              ) : null}
            </ButtonGroup>
            <div>
              {this.state.power !== null ? (
                <Chip label={this.state.power} icon={<PowerIcon />} />
              ) : null}
              {this.state.accuracy !== null ? (
                <Chip label={this.state.accuracy} icon={<TargetIcon />} />
              ) : null}
            </div>
          </CardContent>
        </Card>
      </div>
    ) : (
      <div style={styles}>
        <BasicLoader />
      </div>
    );
  }
}

export default MoveDetails;
