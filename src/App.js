import React, { Component } from 'react';
import './App.css';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import Navbar from "./components/Navbar.js";
import {connect} from "react-redux";

class App extends Component {

  render()
  {
    return (
      <div className="App">
        <Searchbar />
        {this.props.id !== -1 ? <div><Navbar /><BasicInfo /></div>: null}
      </div>
    );
  }
}

const mapStateToProps = function(state)
{
  return {
    id: state.nationalId
  };
}

export default connect(mapStateToProps)(App);
