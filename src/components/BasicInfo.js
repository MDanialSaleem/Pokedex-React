import React from "react";
import AbilitiCard from "./AbilityCard.js";
import TypeCard from "./TypeCard.js";
import ImageCard from "./ImageCard.js";

class BasicInfo extends React.Component
{
    state = {
        id: this.props.id,
        name : this.props.data.name,
        types: this.props.data.types,
        abilities : this.props.data.abilities
    }
    render()
    {
        const styles = {
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            background: "green",
            margin: "5px 5px",
            border: "5px solid green",
            borderRadius: "10px"
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



export default BasicInfo;