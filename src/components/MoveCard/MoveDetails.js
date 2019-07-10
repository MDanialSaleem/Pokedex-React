import React from "react";
import axios from "axios";
import BasicLoader from "../Loader/BasicLoader";

class MoveDetails extends React.Component
{
    state = {
        type: null,
        accuracy: null,
        power: null,
        loaded: false
    };

    componentDidMount()
    {
        //for some reason, in response data links are modified to include localhost. this is a work-around for that.
        let requestURL = this.props.url.replace("http://localhost", "https://cdn.rawgit.com/Naramsim/ninjask/master/data");
        requestURL = requestURL.concat("index.json");
        axios.get(requestURL)
        .then(response => {
            this.setState({
                type: response.data.type.name,
                accuracy: response.data.accuracy,
                power: response.data.power,
                loaded: true
            });
        })
    }
    render()
    {
        //the position is fixed to display it on top of others.
        //the div covers the entire page making it impossible to click on other moves to
        //view details of multiple moves together
        const styles = {
            position: "fixed",
            zIndex: "1",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        };

        const internalStyles = {
            background: "white",
            padding: "10px",
            border: "2px solid darkblue",
            borderRadius: "5px",
            //flex starts here
            display : "flex",
            flexDirection: "column"
        };

        const attributesStyle = {
            margin:"3px 3px",
            border: "2px solid darkblue",
            background: "lightblue",
            color: "white",
            borderRadius: "5px"
        };

        const buttonStyle = {
            background: "red"
        };
        return this.state.loaded ?   
            //null checks are needed for each attribute even after using loader
            //becuase for some moves certain attributes are missing.
            <div style={styles}>
                <div style={internalStyles}>
                <button style={buttonStyle} onClick={this.props.onClose}>Close</button>
                <h4 style={attributesStyle}>{this.props.name}</h4>
                {this.state.type !== null? <h4 style={attributesStyle}>Type:{this.state.type}</h4> :null}
                {this.state.power !== null? <h4 style={attributesStyle}>Power:{this.state.power}</h4> : null}
                {this.state.accuracy !== null? <h4 style={attributesStyle}>Accuracy:{this.state.accuracy}</h4> : null}
            </div>
            </div>
            :
            <div style={styles}>
                <BasicLoader />
            </div>

    }
}

export default MoveDetails;

