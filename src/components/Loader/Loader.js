import React from "react";
import './Loader.css';


export default function(props)
{
    const styles = {
        position : "fixed",
        zIndex : 2,
        width: "100%",
        height : "100%",
        background: "green",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <div style={styles}>
            <div class="lds-circle"></div>
        </div>
    );
}