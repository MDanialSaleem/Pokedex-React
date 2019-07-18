import React from "react";
import { connect } from "react-redux";
import Radium, { StyleRoot } from "radium";
import Searchbar from "../Searchbar/Searchbar";
import BasicInfo from "../BasicInfo/BasicInfo";

import MoveCard from "../MoveCard/MoveCard";
import AppLoader from "../Loader/AppLoader";

//Inline styles by default do not support pseudo selectors or media queries/animations. To enable pseudo-selectors
//we just need to import Radium in whichever component that uses such selectors and wrap the export in Radium HOC.
//However if one of the components has media queries/animations, also wrap the entire application in the StyleRoot
//component.

const App = props => {
  const styles = {
    textAlign: "center",
    backgroundImage:
      "linear-gradient(to bottom right, red, red 20%, blue 20%, blue 40%, white 40%, white 60%, green 60%, green 80%, yellow 80%, yellow 100%)",
    backgroundAttachment: "fixed" /*defines scrolling behaviour*/,
    width: "95%",
    margin: "auto",
    height: "100vh",
    padding: "5px 0px",
    /*grid starts here*/
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  };

  if (props.firstEntered) {
    //this is necessary because otherwise justify content and this property combined makes page wrong.
    delete styles.height;
  }

  return (
    <StyleRoot>
      {//if you do not use thi bracket here, the ternary operator (or any js code for that matter) gets
      //treated as html(or jsx in this case). These bracket here specify that there is code inside
      //these braces which evaluates into a react component or jsx
      !props.loading ? (
        <div style={styles}>
          <Searchbar />
          {props.data !== null ? (
            <BasicInfo id={props.id} data={props.data} />
          ) : null}
          {props.data !== null ? <MoveCard moves={props.data.moves} /> : null}
        </div>
      ) : (
        <AppLoader />
      )}
    </StyleRoot>
  );
};

const mapStateToProps = state => {
  return {
    id: state.nationalId,
    firstEntered: state.firstEntered,
    data: state.data,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(Radium(App));
