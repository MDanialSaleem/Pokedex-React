import React from "react";
import Ability from "./Ability.js";
import Radium from "radium";

const AbilityCard = function(props)
{
    const styles = {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        background: "lightblue",
        alignItems: "center",
        justifyContent: "space-around",
        alignContent: "flex-start",
        boxSizing: "border-box",
        border: "3px solid blue",
        borderRadius: "5px",
        width: "100%",
        "@media (max-width: 600px)": {
            flexDirection: "column"
        }
    };



    const headingStyle = {
        color: "white",
        width: "100%",
        margin: "0px"
    };


    //because otherwise hidden ability would be the first.
    props.abilities.reverse();
    return(
        <div style={styles}>
            <h4 style={headingStyle}>Abilities</h4>
            {props.abilities.map(abilityObj => <Ability key={abilityObj.slot} ability={abilityObj}/>)}
        </div>
    );
}

export default Radium(AbilityCard);