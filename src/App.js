import React, { Component } from 'react';
import './App.css';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import {connect} from "react-redux";
import MoveCard from "./components/MoveCard.js";
import AppLoader from "./components/AppLoader.js";

class App extends Component {

  render()
  {
    const styles = {
      background: "darkslategrey",
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
      //this needs to be deleted to enable scrolling.
      delete styles.position;
    }
    return !this.props.loading ?
      (<div style={styles} className="App">
        <Searchbar />
        {this.props.data !== null ? <BasicInfo id={this.props.id} data={this.props.data}/> : null}
        {this.props.data !== null ? <MoveCard moves={this.props.data.moves} />: null}
      </div>)
      :
      <AppLoader />;
    
  }
}

const mapStateToProps = function(state)
{
  return {
    id: state.nationalId,
    firstEntered: state.firstEntered,
    data: state.data,
    loading: state.loading
  };
}

export default connect(mapStateToProps)(App);
