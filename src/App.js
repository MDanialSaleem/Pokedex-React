import React, { Component } from 'react';
import Searchbar from "./components/Searchbar.js";
import BasicInfo from "./components/BasicInfo.js";
import {connect} from "react-redux";
import MoveCard from "./components/MoveCard.js";
import AppLoader from "./components/AppLoader.js";
import Radium, {StyleRoot} from "radium";

class App extends Component {

  render()
  {

    const styles = {
      textAlign: "center",
      backgroundImage: "linear-gradient(to bottom right, red, red 20%, blue 20%, blue 40%, white 40%, white 60%, green 60%, green 80%, yellow 80%, yellow 100%)",
      backgroundAttachment: "fixed", /*defines scrolling behaviour*/
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

    if(this.props.firstEntered)
    {
      //this is necessary because otherwise justify content and this property combined makes page wrong.
      delete styles.height;
    };
    
    return(
    <StyleRoot> 
        {
          !this.props.loading ?
          <div style={styles}>
            <Searchbar />
            {this.props.data !== null ? <BasicInfo id={this.props.id} data={this.props.data}/> : null}
            {this.props.data !== null ? <MoveCard moves={this.props.data.moves} />: null}
          </div>
          :
          <AppLoader />
        }
      </StyleRoot>);
    
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

export default connect(mapStateToProps)(Radium(App));
