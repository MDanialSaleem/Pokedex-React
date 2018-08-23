import React, { Component } from 'react';
import './App.css';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import {connect} from "react-redux";
import MoveCard from "./components/MoveCard.js";

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
      justifyContent: "center",
    };

    
    if(this.props.firstEntered)
    {
      styles.justifyContent = "flex-start";
      delete styles.position;
    }
    return (
      <div style={styles} className="App">
        <Searchbar />
        {this.props.id !== -1 ? <BasicInfo /> : null}
        {this.props.moves !== null ? <MoveCard moves={this.props.moves} />: null}
      </div>
    );
  }
}

const mapStateToProps = function(state)
{
  return {
    id: state.nationalId,
    firstEntered: state.firstEntered,
    moves: state.moves
  };
}

export default connect(mapStateToProps)(App);
