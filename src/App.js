import React, { Component } from 'react';
import './App.css';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import {connect} from "react-redux";
import MoveCard from "./components/MoveCard.js";
import Loader from "./components/Loader/Loader.js";

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
    return !this.props.loading ?
      (<div style={styles} className="App">
        <Searchbar />
        {this.props.data !== null ? <BasicInfo id={this.props.id} data={this.props.data}/> : null}
        {this.props.data !== null ? <MoveCard moves={this.props.data.moves} />: null}
      </div>)
      :
      <Loader />;
    
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
