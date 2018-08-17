import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import AbilitiCard from "./AbilityCard.js";
import MoveCard from "./MoveCard.js";
import TypeCard from "./TypeCard.js";
import ImageCard from "./ImageCard.js";

class BasicInfo extends React.Component
{
    state = {
        name : null,
        types: null,
        abilities : null,
        moves: null,
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
        });
    }
    render()
    {
        return (
            <div>
                {this.state.name === null? null : <h1>{this.state.name}</h1>}
                <ImageCard id={this.props.id} />
                {this.state.abilities === null? null : <AbilitiCard abilities={this.state.abilities} />}
                {this.state.types === null? null : <TypeCard types={this.state.types} />}
                {this.state.moves === null? null : <MoveCard moves={this.state.moves} show={this.props.showMoves}/>}
            </div>
        );
    }
}


const mapStateToProps = function(state)
{
    return {
        id : state.nationalId,
        showMoves: state.showMoves
    };
}


export default connect(mapStateToProps)(BasicInfo);