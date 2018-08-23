import React from "react";
import axios from "../../node_modules/axios";
import BasicLoader from "./BasicLoader/BasicLoader.js";

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
            console.log(response);
        })
    }
    render()
    {
        const styles = {
            background: "white",
            position: "fixed",
            zIndex: "1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
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

        const buttonStyles = {
            background: "red"
        };
        return this.state.loaded ?   
            <div style={styles}>
                <button onClick={this.props.onClose}>Close</button>
                <h4 style={attributesStyle}>{this.props.name}</h4>
                {this.state.type !== null? <h4 style={attributesStyle}>Type:{this.state.type}</h4> :null}
                {this.state.power !== null? <h4 style={attributesStyle}>Power:{this.state.power}</h4> : null}
                {this.state.accuracy !== null? <h4 style={attributesStyle}>Accuracy:{this.state.accuracy}</h4> : null}
            </div>
            :
            <div style={styles}>
                <BasicLoader />
            </div>

    }
}

export default MoveDetails;

