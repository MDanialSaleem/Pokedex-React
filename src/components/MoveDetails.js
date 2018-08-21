import React from "react";
import axios from "../../node_modules/axios";

class MoveDetails extends React.Component
{
    state = {
        type: null,
        accuracy: null,
        power: null
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
                power: response.data.power
            });
            console.log(response);
        })
    }
    render()
    {
        const styles = {
            background: "white",
            height: "500px",
            position: "fixed",
            zIndex: "1",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        };

        return (
            <div style={styles}>
                <button onClick={this.props.onClose}>Close</button>
                <h1>{this.state.type}</h1>
                <h1>{this.state.accuracy}</h1>
                <h1>{this.state.power}</h1>
                <h1>{this.props.url}</h1>
            </div>
        );
    }
}

export default MoveDetails;

