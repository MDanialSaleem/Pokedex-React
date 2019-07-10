import React from "react";
import BasicLoader from "./BasicLoader";

//basically a wrapper for the normal loader that encompasses the whole screen by using positon fixed
export default function(props)
{
    const styles = {
        position : "fixed",
        zIndex : 2,
        width: "100%",
        height : "100%",
        background: "linear-gradient(to bottom right, red, red 20%, blue 20%, blue 40%, yellow 40%, yellow 60%, green 60%, green 80%, white 80%, white 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    };

    return (
        <div style={styles}>
            <BasicLoader />
        </div>
    );
}