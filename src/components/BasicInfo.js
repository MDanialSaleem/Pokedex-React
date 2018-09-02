import React from "react";
import AbilitiCard from "./AbilityCard.js";
import TypeCard from "./TypeCard.js";
import ImageCard from "./ImageCard.js";
import Radium from "radium";

function BasicInfo(props)
{
    const styles = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        background: "lightgray",
        margin: "5px 5px",
        border: "5px solid black",
        borderRadius: "10px",
        "@media (max-width: 600px)": {
            flexDirection: "column",
            justifyContent: "center"
        }

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
        width: "300px"
    };

    return (
        <div style={styles}>
            <ImageCard id={props.id} name={props.data.name} />
            <div style={internalStyle}>
                <div style = {nameNumberStyle}>
                    <h1 style={numberStyle}>#{props.id}</h1>
                    <h1 style={nameStyle}>{props.data.name}</h1>
                </div>
                <TypeCard types={props.data.types} />
                <AbilitiCard abilities={props.data.abilities} />
            </div>
        </div>
    );
}



export default Radium(BasicInfo);