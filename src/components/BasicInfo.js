import React from "react";
import AbilitiCard from "./AbilityCard.js";
import TypeCard from "./TypeCard.js";
import ImageCard from "./ImageCard.js";
import Radium from "radium";

function BasicInfo(props)
{
    const styles = {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        justifyItems: "center",
        alignItems: "center",
        //grid ends here
        background: "lightgray",
        margin: "5px 5px",
        border: "5px solid black",
        borderRadius: "10px",
        boxSizing: "border-box",
        "@media (max-width: 600px)": {
            gridTemplateColumns: "1fr",
            gridRowGap: "10px",
            width: "90%"
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
        display: "grid",
        gridRowGap: "10px",
        justifyItems: "center",
        //grid ends here
        padding: "10px"
    };

    const nameNumberStyle = {
        display: "flex",
        width: "300px",
        fontSize: "2em",
        "@media (max-width: 600px)": {
            flexDirection: "column",
            width: "100%",
            justifyContent: "flex-start"
        }
    };

    return (
        <div style={styles}>
            <ImageCard id={props.id} name={props.data.name} />
            <div style={internalStyle}>
                <div style = {nameNumberStyle}>
                    <text style={numberStyle}>#{props.id}</text>
                    <text style={nameStyle}>{props.data.name}</text>
                </div>
                <TypeCard types={props.data.types} />
                <AbilitiCard abilities={props.data.abilities} />
            </div>
        </div>
    );
}



export default Radium(BasicInfo);