import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import AbilitiCard from "./AbilityCard.js";
import TypeCard from "./TypeCard.js";
import ImageCard from "./ImageCard.js";
import * as ActionTypes from "../store/Actions.js";

class BasicInfo extends React.Component
{
    state = {
        name : null,
        types: null,
        abilities : null
    }

    componentDidMount()
    {
        axios.get(`https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2/pokemon/${this.props.id}/index.json`)
        .then(response => {
            this.setState({
                name:response.data.name,
                abilities : response.data.abilities,
                types: response.data.types,
                moves: response.data.moves
            });
            this.props.updateMoves(response.data.moves);
        });
    }

    componentDidUpdate(prevProps, prevState)
    {
        if(prevProps.id !== this.props.id)
        {
            axios.get(`https://cdn.rawgit.com/Naramsim/ninjask/master/data/api/v2/pokemon/${this.props.id}/index.json`)
            .then(response => {
                this.setState({
                    name:response.data.name,
                    abilities : response.data.abilities,
                    types: response.data.types,
                });
                this.props.updateMoves(response.data.moves);
            });
        }
    }
    render()
    {
        const styles = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            background: "green",
            margin: "5px 5px"
        };


        const numberStyle = {
            background: "black",
            color: "white",
            display: "inline",
            flexGrow: 1
        };

        const nameStyle = {
            background: "white",
            display: "inline",
            flexGrow: 1
        };

        const internalStyle = {
            margin: "30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            height: "250px"
        };

        const nameNumberStyle = {
            display: "flex",
            justifyContent: "space-between",
        };

        return (
            <div style={styles}>
                <ImageCard id={this.props.id} />
                <div style={internalStyle}>
                    {this.state.name === null? null :
                         <div style = {nameNumberStyle}>
                             <h1 style={numberStyle}>#{this.props.id}</h1>
                             <h1 style={nameStyle}>{this.state.name}</h1>
                         </div>
                    }
                    {this.state.types === null? null : <TypeCard types={this.state.types} />}
                    {this.state.abilities === null? null : <AbilitiCard abilities={this.state.abilities} />}
                </div>
                {/* {this.state.moves === null? null : <MoveCard moves={this.state.moves} show={this.props.showMoves}/>} */}
            </div>
        );
    }
}


const mapStateToProps = function(state)
{
    return {
        id : state.nationalId
    };
};

const mapDispatchToProps = function(dispatch)
{
    return {
        updateMoves : (moves) => dispatch({type:ActionTypes.UPDATE_MOVES, moves})
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(BasicInfo);