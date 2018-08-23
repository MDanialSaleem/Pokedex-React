import React from "react";
import AbilitiCard from "./AbilityCard.js";
import TypeCard from "./TypeCard.js";
import ImageCard from "./ImageCard.js";

class BasicInfo extends React.Component
{

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
                    <div style = {nameNumberStyle}>
                        <h1 style={numberStyle}>#{this.props.id}</h1>
                        <h1 style={nameStyle}>{this.props.data.name}</h1>
                    </div>
                    <TypeCard types={this.props.data.types} />
                    <AbilitiCard abilities={this.props.data.abilities} />
                </div>
            </div>
        );
    }
}



export default BasicInfo;