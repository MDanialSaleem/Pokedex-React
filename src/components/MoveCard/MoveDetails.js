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


// import MoveData from "./dummy";

const MoveDetails = props => {
  const [type, setType] = React.useState(null);
  const [accuracy, setAccuracy] = React.useState(null);
  const [power, setPower] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const [description, setDescription] = React.useState(null);

  React.useEffect(() => {
    //because the use effect callback has to be synchronous.
    const getMove = async () => {
      try {
        const response = await axios.get(props.url);
        setType(response.data.type.name);
        setAccuracy(response.data.accuracy);
        setPower(response.data.power);
        setLoaded(true);
        setDescription(response.data.flavor_text_entries[2].flavor_text);
      } catch (error) {
        throw new Error("A server error occured. Please try late");
      }
    };
    getMove();
  }, []);

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
  if (type !== null) {
    colorStyles.background = TypeToColor(type);
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
      {loaded ? (
        <Card style={cardStyles}>
          <CardActions>
            <IconButton onClick={props.onClose}>
              <CloseIcon />
            </IconButton>
          </CardActions>
          <CardContent>
            <ButtonGroup style={groupStyle} size="medium" disabled>
              <Button>{props.name}</Button>
              <Button style={colorStyles}>{type}</Button>
            </ButtonGroup>
            <p style={pStyle}>{description !== null ? description : ""}</p>
            <div>
              {/* null checks are needed for each attribute even after using loader becuase for some moves certain attributes are missing. */}
              {power !== null ? (
                <Chip style={chipStyles} label={power} icon={<PowerIcon />} />
              ) : null}
              {accuracy !== null ? (
                <Chip
                  style={chipStyles}
                  label={accuracy}
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
};

export default MoveDetails;
