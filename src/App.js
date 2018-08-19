import React, { Component } from 'react';
import './App.css';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import Navbar from "./components/Navbar.js";
import {connect} from "react-redux";

class App extends Component {

  render()
  {
    const styles = {
      background: "grey",
      height: "100%",
      width: "100%",
      position: "fixed",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    };

    if(this.props.firstEntered)
    {
      styles.alignContent = "flex-start"
    }
    return (
      <div style={styles} className="App">
        <Searchbar />
        {this.props.id !== -1 ? <div><Navbar /><BasicInfo /></div>: null}
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
