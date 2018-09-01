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

    const assignedClasses = ["App"];
    if(!this.props.firstEntered)
    {
      assignedClasses.push("AppHeightFull");
    }
    
    return !this.props.loading ?
      (<div className={assignedClasses.join(" ")}>
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
