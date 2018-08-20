import React, { Component } from 'react';
import './App.css';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import {connect} from "react-redux";

class App extends Component {

  render()
  {
    const styles = {
      background: "grey",
      height: "100%",
      width: "100%",
      position: "fixed",
      //flex starts here
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    };

    
    if(this.props.firstEntered)
    {
      styles.justifyContent = "flex-start";
    }
    return (
      <div style={styles} className="App">
        <Searchbar />
        {this.props.id !== -1 ? <BasicInfo /> : null}
      </div>
    );
  }
}

const mapStateToProps = function(state)
{
  return {
    id: state.nationalId,
    firstEntered: state.firstEntered
  };
}

export default connect(mapStateToProps)(App);
